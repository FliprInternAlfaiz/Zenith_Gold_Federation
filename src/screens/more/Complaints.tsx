import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import firestore from "@react-native-firebase/firestore";

const Complaints = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !complaint) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
    } else {
      try {
        const id = `${name}-${email}-${Date.now()}`;
        await firestore().collection("Complaints").doc(id).set({
          name,
          email,
          complaint,
        });

        ToastAndroid.show("Complaint submitted successfully", ToastAndroid.SHORT);
        setName("");
        setEmail("");
        setComplaint("");
      } catch (error) {
        console.error("Error sending data to Firestore:", error);
        ToastAndroid.show(
          "An unexpected error occurred. Please try again later",
          ToastAndroid.SHORT
        );
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Submit Your Complaint</Text>
        <Text style={styles.paragraph}>
          At Clear View Finance, we take every complaint seriously. Please
          provide your details and describe your issue, and we will address it
          promptly.
        </Text>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.input}
          theme={theme}
        />
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          theme={theme}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <TextInput
          label="Complaint"
          value={complaint}
          onChangeText={(text) => setComplaint(text)}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.input}
          theme={theme}
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      </View>
    </ScrollView>
  );
};

const theme = {
  colors: {
    primary: "#000",
    underlineColor: "#000",
    outline: "#000",
  },
  roundness: 15,
  borderWidth: 3,
  borderColor: "#000",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2d2d2d",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: "#555",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#6200ee",
  }
});

export default Complaints;
