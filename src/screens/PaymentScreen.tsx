import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ToastAndroid,
  Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import firestore from "@react-native-firebase/firestore";
import { NavigationProp } from "@react-navigation/native";

// Define the theme separately
const textInputTheme = {
  colors: {
    primary: "#000",
    underlineColor: "#000",
    outline: "#000",
  },
  roundness: 15,
  borderWidth: 3,
  borderColor: "#000",
};

const PaymentScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = async () => {
    if (!name || !email || !phone) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
    } else if (phone.length !== 10) {
      ToastAndroid.show(
        "Please enter a valid phone number",
        ToastAndroid.SHORT
      );
    } else {
      try {
        ToastAndroid.show("Sending...", ToastAndroid.LONG);
        const id = `${name}-${email}-${Date.now()}`;
        await firestore().collection("PaymentRequests").doc(id).set({
          name,
          email,
          phone,
        });
        ToastAndroid.show("Sent!", ToastAndroid.SHORT);
        setName("");
        setEmail("");
        setPhone("");
      } catch (error) {
        console.error("Error sending data to Firestore:", error);
        Alert.alert(
          "Error",
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.modalContent}>
      <Image
        source={require("../assets/graphics/payment.png")}
        style={styles.image}
      />
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Phone no."
        value={phone}
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
        style={styles.input}
        keyboardType="phone-pad"
        maxLength={10}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        <Text style={styles.btnText}>Send Payment Link</Text>
      </Button>
    </View>
    <Image
      source={require("../assets/loanTransfer.png")}
      style={styles.largeImage}
    />
    <Image
      source={require("../assets/upi.png")}
      style={{
        width: "80%",
        height: 90,
        alignSelf: "center",
        marginBottom: 20,
      }}
    />
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 220,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    padding: 12,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#eef",
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
    color: "#000",
    fontSize: 18,
  },
  btnText: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
  largeImage: {
    width: "70%",
    height: 130,
    alignSelf: "center",
    marginVertical: 20,
  }
});

export default PaymentScreen;
