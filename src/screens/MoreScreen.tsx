import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const MoreScreen = ({ navigation }) => {
  const moreImageUrl =
    "https://img.freepik.com/premium-vector/loan-disbursement-abstract-concept-vector-illustration_107173-24814.jpg";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/graphics/more.png")}
        style={styles.image}
      />
      <Text style={styles.description}>
        Explore more about our services, provide feedback, get help, and review
        important documents such as terms and conditions, and privacy policy.
        Our aim is to ensure that you have all the information you need to use
        our services effectively and efficiently.
      </Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Text style={styles.optionText}>Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Help")}
      >
        <Text style={styles.optionText}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Complaints")}
      >
        <Text style={styles.optionText}>Complaints</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("TermsAndConditions")}
      >
        <Text style={styles.optionText}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Text style={styles.optionText}>Privacy & Policy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 20,
  },
  option: {
    width: "100%",
    padding: 18,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#eef",
    borderRadius: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#000",
  },
});

export default MoreScreen;
