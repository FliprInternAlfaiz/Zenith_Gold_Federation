import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          At Clear View Finance, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our website. Please read this
          Privacy Policy carefully. If you do not agree with the terms of this
          Privacy Policy, please do not access the site.
        </Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. You are advised
          to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </Text>
        <Text style={styles.paragraph}>
          We collect personal information that you voluntarily provide to us
          when you register on the site, place an order, subscribe to our
          newsletter, respond to a survey, fill out a form, or enter information
          on our site. This information may include your name, email address,
          mailing address, phone number, credit card information, or other
          details to help you with your experience.
        </Text>
        <Text style={styles.paragraph}>
          We use the information we collect from you to personalize your
          experience and to allow us to deliver the type of content and product
          offerings in which you are most interested. We also use this
          information to improve our website in order to better serve you.
        </Text>
        <Text style={styles.paragraph}>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include website
          hosting partners and other parties who assist us in operating our
          website, conducting our business, or serving our users, as long as
          those parties agree to keep this information confidential. We may also
          release information when its release is appropriate to comply with the
          law, enforce our site policies, or protect ours or others' rights,
          property, or safety.
        </Text>
        <Text style={styles.paragraph}>
          By using our site, you consent to our website's Privacy Policy.
        </Text>
        <Text style={styles.paragraph}>
          If you have any questions about our Privacy Policy, please contact us
          at clearviewfinance57@gmail.com
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
});

export default PrivacyPolicy;
