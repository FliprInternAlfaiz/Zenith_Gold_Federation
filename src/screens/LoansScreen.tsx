import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { firebaseConfig } from "../config/firebase";

const LoansScreen = ({ navigation }) => {
  const loanPrograms = [
    { title: "Education Loan Program", screen: "Education" },
    { title: "Car Loan Program", screen: "Car" },
    { title: "Home Loan Program", screen: "HomeLoan" },
    { title: "Business Loan Program", screen: "Business" },
    { title: "Professional Loan Program", screen: "Professional" },
    { title: "Salaried Loan Program", screen: "Salaried" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loanPrograms.map((program, index) => (
        <TouchableOpacity
          key={index}
          style={styles.loanProgram}
          onPress={() => navigation.navigate(program.screen)}
        >
          <Text style={styles.loanProgramTitle}>{program.title}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.description}>
        Explore our diverse loan options tailored to meet your specific
        financial needs. Whether you're looking for personal, business, house,
        car loans, or debt consolidation, we provide detailed information to
        help you make informed decisions.
      </Text>
      <Image
        source={require("../assets/graphics/programs.png")}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  loanProgram: {
    width: "100%",
    padding: 18,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#eef",
    borderRadius: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  loanProgramTitle: {
    color: "#000",
    fontSize: 18,
    textAlign: "center",
  },
});

export default LoansScreen;
