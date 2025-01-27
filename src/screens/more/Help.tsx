import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { TextInput, Button, DefaultTheme } from "react-native-paper";
import firestore from "@react-native-firebase/firestore";

const Help = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !help) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
    } else {
      try {
        const id = `${name}-${email}-${Date.now()}`;
         ToastAndroid.show("Sending...", ToastAndroid.LONG);
        await firestore().collection("HelpRequests").doc(id).set({
          name,
          email,
          help,
        });

        ToastAndroid.show("Help request submitted successfully", ToastAndroid.SHORT);
        setName("");
        setEmail("");
        setHelp("");
      } catch (error) {
        console.error("Error sending data to Firestore:", error);
        ToastAndroid.show(
          "An unexpected error occurred. Please try again later",
          ToastAndroid.SHORT
        );
      }
    }
  };

  const inputTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000",
      underlineColor: "#000",
      outline: "#000",
    },
    roundness: 15,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>How Can We Help You?</Text>
        <Text style={styles.paragraph}>
          At Clear View Finance, we are here to assist you with any questions or
          issues you may have. Please provide your details and let us know how
          we can help.
        </Text>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.input}
          theme={inputTheme}
        />
        <TextInput
          label="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          theme={inputTheme}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <TextInput
          label="How can we help?"
          value={help}
          onChangeText={(text) => setHelp(text)}
          mode="outlined"
          multiline
          numberOfLines={4}
          style={styles.input}
          theme={inputTheme}
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

export default Help;
