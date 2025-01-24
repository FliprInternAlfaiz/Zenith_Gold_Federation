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


const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !feedback) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
      return;
    }

    try {
      const id = `${name}-${email}-${Date.now()}`;
      const response = await firestore().collection("Feedback").doc(id).set({
        name,
        email,
        feedback,
        timestamp: firestore.FieldValue.serverTimestamp(),
      });
      console.log(response);
      ToastAndroid.show("Feedback submitted successfully", ToastAndroid.SHORT);
      setName("");
      setEmail("");
      setFeedback("");
    } catch (error) {
      console.error("Error sending data to Firestore:", error);
      ToastAndroid.show(
        "An unexpected error occurred. Please try again later.",
        ToastAndroid.SHORT
      );
    }
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>We Value Your Feedback</Text>
        <Text style={styles.paragraph}>
          At Clear View Finance, we are committed to providing the best service
          possible. Your feedback helps us improve and better serve you.
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
          label="Feedback"
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
          mode="outlined"
          multiline
          numberOfLines={7}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
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
  },
});

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

export default Feedback;
