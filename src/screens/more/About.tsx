import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>About us</Text>
        <Text style={styles.paragraph}>
          At Clear View Finance, we are dedicated to providing transparent and
          flexible loan solutions to meet your financial needs. As a trusted
          loan lending company, our mission is to empower individuals and
          businesses by offering tailored financial products and exceptional
          customer service.
        </Text>
        <Text style={styles.title}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to provide clear and straightforward financial
          solutions that help our clients achieve their goals. We believe in
          building long-lasting relationships based on trust, integrity, and
          mutual respect. Our team works tirelessly to ensure that every client
          receives personalized attention and a loan product that suits their
          unique situation.
        </Text>
        <Text style={styles.title}>Our Values</Text>
        <Text style={styles.paragraph}>
          Integrity: We adhere to the highest standards of honesty and ethical
          conduct in all our dealings. Transparency: We are committed to
          providing clear and easy-to-understand loan terms and conditions.
          Customer Focus: Our clients are at the heart of everything we do. We
          strive to exceed their expectations in every interaction. Innovation:
          We continuously seek innovative solutions to improve our services and
          meet the evolving needs of our clients.
        </Text>
        <Text style={styles.title}>Our Services</Text>
        <Text style={styles.paragraph}>
          Personal Loans: Flexible loan options designed to meet your personal
          financial needs. Business Loans: Tailored financial solutions to help
          your business grow and thrive. Mortgage Loans: Competitive rates and
          terms to help you secure your dream home. Auto Loans: Financing
          options for purchasing or refinancing your vehicle. Debt
          Consolidation: Solutions to help you manage and consolidate your debt
          effectively.
        </Text>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.paragraph}>
          We would love to hear from you! Whether you have questions about our
          loan products, need assistance with your application, or want to
          provide feedback, our team is here to help. Email:
          clearviewfinance57@gmail.com
        </Text>
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
  logo: {
    width: "55%",
    height: 50,
    alignSelf: "center",
    marginBottom: 20,
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
});

export default About;
