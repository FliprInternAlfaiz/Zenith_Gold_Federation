import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { TextInput, Button } from "react-native-paper";
import firestore from "@react-native-firebase/firestore";

const Professional = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [professionalAssociations, setProfessionalAssociations] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [incomeTaxReturns, setIncomeTaxReturns] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [collateralOffered, setCollateralOffered] = useState("");

  const handleSave = async () => {
    if (
      !fullName ||
      !dateOfBirth ||
      !address ||
      !contactDetails ||
      !maritalStatus ||
      !qualifications ||
      !experienceYears ||
      !professionalAssociations ||
      !loanAmount ||
      !loanPurpose ||
      !incomeTaxReturns ||
      !creditScore ||
      !collateralOffered
    ) {
      alert("Please fill all the details");
    } else {
      const id = `${fullName}-${contactDetails}-${Date.now()}`;
      await firestore().collection("professionalLoanApplications").doc(id).set({
        fullName,
        dateOfBirth,
        address,
        contactDetails,
        maritalStatus,
        qualifications,
        experienceYears,
        professionalAssociations,
        loanAmount,
        loanPurpose,
        incomeTaxReturns,
        creditScore,
        collateralOffered,
      });
      ToastAndroid.show(
        "Your application has been submitted successfully",
        ToastAndroid.SHORT
      );
      setFullName("");
      setDateOfBirth("");
      setAddress("");
      setContactDetails("");
      setMaritalStatus("");
      setQualifications("");
      setExperienceYears("");
      setProfessionalAssociations("");
      setLoanAmount("");
      setLoanPurpose("");
      setIncomeTaxReturns("");
      setCreditScore("");
      setCollateralOffered("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Professional Loan Program</Text>
      <Text style={styles.stepsTitle}>Description:</Text>
      <Text style={styles.stepsDesc}>
        A professional loan is a type of loan specifically intended for
        professional purposes. It involves borrowing money from a lender, which
        must be repaid with added interest over time. Professional loans help
        entrepreneurs and professional owners start, grow, and sustain their
        businesses by providing the necessary capital to cover expenses such as:
      </Text>
      <Text style={styles.stepsText}>
        * Startup costs (office space, licenses, inventory, payroll, etc.)
      </Text>
      <Text style={styles.stepsText}>
        * Long-term growth (real estate, equipment, personnel)
      </Text>
      <Text style={styles.stepsText}>* Short-term gaps in cash flow</Text>
      <Text style={styles.stepsText}>
        * Purchasing an existing professional
      </Text>
      <Text style={styles.stepsText}>
        * Refinancing or consolidating professional debt
      </Text>
      <Text style={styles.stepsTitle}>Key Features:</Text>
      <Text style={styles.stepsText}>
        * Eligibility criteria based on creditworthiness, professional
        stability, and revenue
      </Text>
      <Text style={styles.stepsText}>
        * Secured loans that require collateral, or unsecured loans without
        collateral
      </Text>
      <Text style={styles.stepsText}>
        * Personal guarantees often required from principals with 20%+ ownership
      </Text>
      <Text style={styles.stepsText}>
        * Various types such as term loans, working capital loans, commercial
        loans, startup loans, and equipment financing
      </Text>
      <Text style={styles.stepsTitle}>Professional Loan Providers:</Text>
      <Text style={styles.stepsText}>* Banks</Text>
      <Text style={styles.stepsText}>* Credit unions</Text>
      <Text style={styles.stepsText}>* Online lenders</Text>
      <Text style={styles.stepsText}>* Alternative finance providers</Text>
      {/* Loan Application Process: */}
      <Text style={styles.stepsTitle}>Step 1: Documents Required</Text>
      <Text style={styles.stepsText}>* Identity Proof:</Text>
      <Text style={styles.stepsSubText}>+ PAN Card</Text>
      <Text style={styles.stepsSubText}>+ Aadhar Card</Text>
      <Text style={styles.stepsSubText}>+ Passport</Text>
      <Text style={styles.stepsSubText}>+ Voter ID</Text>
      <Text style={styles.stepsSubText}>+ Driving License</Text>
      <Text style={styles.stepsText}>* Address Proof:</Text>
      <Text style={styles.stepsSubText}>+ Aadhar Card</Text>
      <Text style={styles.stepsSubText}>+ Passport</Text>
      <Text style={styles.stepsSubText}>+ Voter ID</Text>
      <Text style={styles.stepsSubText}>+ Driving License</Text>
      <Text style={styles.stepsSubText}>+ Utility Bills</Text>
      <Text style={styles.stepsSubText}>+ Ration Card</Text>
      <Text style={styles.stepsSubText}>+ Trade License</Text>
      <Text style={styles.stepsSubText}>+ Lease Agreement</Text>
      <Text style={styles.stepsSubText}>+ Sales Tax Certificate</Text>
      <Text style={styles.stepsText}>* Income Proof:</Text>
      <Text style={styles.stepsSubText}>
        + Bank statement or passbook of the last 2 years
      </Text>
      <Text style={styles.stepsSubText}>
        + Income Tax Return of the last 2 years
      </Text>
      <Text style={styles.stepsSubText}>
        + Balance Sheet, Income, and Profit & Loss A/c for the previous 2 years
      </Text>
      <Text style={styles.stepsSubText}>
        + Audited financials for the previous 3 years
      </Text>
      <Text style={styles.stepsSubText}>
        + GST Challans and Tax Audit reports
      </Text>
      <Text style={styles.stepsText}>
        * Proof of Continuation of Professional:
      </Text>
      <Text style={styles.stepsSubText}>
        + ITR/Trade license/Establishment/Sales Tax Certificate
      </Text>
      <Text style={styles.stepsText}>* Professional Ownership Proof:</Text>
      <Text style={styles.stepsSubText}>
        + Sole Proprietorship Declaration or Certified Copy of Partnership Deed
      </Text>
      <Text style={styles.stepsSubText}>
        + Certified true copy of Memorandum & Articles of Association (certified
        by Director)
      </Text>
      <Text style={styles.stepsSubText}>
        + Certified true copy of Memorandum & Articles of Association (certified
        by Director)
      </Text>
      <Text style={styles.stepsText}>* Other Mandatory Documents:</Text>
      <Text style={styles.stepsSubText}>+ Application Form</Text>
      <Text style={styles.stepsSubText}>+ Passport Size Photo</Text>
      <Text style={styles.stepsSubText}>
        + Valid Identity Proof of the Applicant
      </Text>
      <Text style={styles.stepsSubText}>+ Valid Proof of Residence</Text>
      <Text style={styles.stepsSubText}>+ Proof of Age</Text>
      <Text style={styles.stepsTitle}>Step 2: Submit Documents</Text>
      <Text style={styles.stepsText}>* Send the documents to: </Text>
      <Text style={styles.stepsSubText}>clearviewfinance57@gmail.com</Text>
      <Text style={styles.stepsTitle}>Step 3: Wait for Approval</Text>
      <Text style={styles.stepsDesc}>
        Please note that the approval process may vary depending on the lender
        and the specific requirements of the loan.
      </Text>
      <Text style={styles.stepsTitle}>Personal Information:</Text>
      <TextInput
        label="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Date of Birth"
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Contact Details"
        value={contactDetails}
        onChangeText={(text) => setContactDetails(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Marital Status"
        value={maritalStatus}
        onChangeText={(text) => setMaritalStatus(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <Text style={styles.stepsTitle}>Professional Information:</Text>
      <TextInput
        label="Professional Qualifications"
        value={qualifications}
        onChangeText={(text) => setQualifications(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Years of Experience"
        value={experienceYears}
        onChangeText={(text) => setExperienceYears(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Professional Associations"
        value={professionalAssociations}
        onChangeText={(text) => setProfessionalAssociations(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <Text style={styles.stepsTitle}>Financial Information:</Text>
      <TextInput
        label="Loan Amount Required"
        value={loanAmount}
        onChangeText={(text) => setLoanAmount(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Purpose of the Loan"
        value={loanPurpose}
        onChangeText={(text) => setLoanPurpose(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Income Tax Returns (last 2-3 years)"
        value={incomeTaxReturns}
        onChangeText={(text) => setIncomeTaxReturns(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Credit Score"
        value={creditScore}
        onChangeText={(text) => setCreditScore(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <TextInput
        label="Collateral Offered"
        value={collateralOffered}
        onChangeText={(text) => setCollateralOffered(text)}
        style={styles.input}
        theme={theme}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Submit
      </Button>
      <View style={{ height: 40 }} />
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
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 0,
  },
  stepsTitle: {
    width: "100%",
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 15,
  },
  stepsDesc: {
    width: "100%",
    fontSize: 16,
    marginVertical: 5,
  },
  stepsText: {
    fontSize: 15,
    width: "90%",
    marginLeft: 20,
    marginVertical: 5,
  },
  stepsSubText: {
    width: "80%",
    marginLeft: 40,
    marginVertical: 5,
  },
  input: {
    width: "100%",
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  }
});

export default Professional;
