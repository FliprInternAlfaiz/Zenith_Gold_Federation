import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.paragraph}>
          These terms and conditions govern your use of the services provided by
          Clearview Finance and outline your responsibilities as a borrower. By
          accessing or using our services, you agree to comply with these terms
          and conditions. Please read this Agreement carefully before
          proceeding.
        </Text>
        <Text style={styles.paragraph}>
          1. Loan Repayment Obligations {"\n"}1.1. You are responsible for
          repaying the loan amount, including any accrued interest, fees, and
          penalties, according to the terms outlined in the loan agreement.{" "}
          {"\n"}1.2. Failure to make timely repayments may result in additional
          charges and penalties, negatively impacting your credit history and
          credit score. {"\n"}1.3. The loan repayment schedule, including the
          due dates and amounts, will be clearly communicated to you in the loan
          agreement.
        </Text>
        <Text style={styles.paragraph}>
          2. Consequences of Non-Payment {"\n"}2.1. Non-payment or late payment
          of loans may lead to negative credit reporting, as governed by the
          Credit Information Companies (Regulation) Act, 2005. {"\n"}2.2. Credit
          Information Companies (CICs), such as CIBIL, Equifax, Experian, and
          CRIF High Mark, may receive information about your non-payment or late
          payment, resulting in negative remarks on your credit history and
          affecting your ability to secure future loans. {"\n"}2.3. Your credit
          score, a numerical representation of your creditworthiness, may be
          adversely impacted by non-payment or late payment, making it difficult
          to obtain credit in the future. {"\n"}2.4. Clearview Finance reserves
          the right to pursue legal action to recover the outstanding debt in
          the event of non-payment. Legal action may involve initiating legal
          proceedings and potentially filing a police complaint against you for
          defaulting on the loan repayment. {"\n"}2.5. In cases of non-payment,
          Clearview Finance may assign recovery agents to visit your home and
          office for debt collection. Recovery agents will adhere to the
          boundaries of the law and maintain professionalism in their approach.{" "}
          {"\n"}2.6. Non-payment may result in adverse consequences, including
          but not limited to wage garnishment, property liens, and other
          measures to recover the outstanding amount as determined by court
          judgments. {"\n"}2.7. You may be responsible for covering the costs
          incurred during the debt recovery process, such as legal fees,
          collection agency fees, court fees, and any other expenses necessary
          for debt collection.
        </Text>
        <Text style={styles.paragraph}>
          3. Impact on Future Borrowings {"\n"}3.1. Non-payment and negative
          credit reporting can have a lasting impact on your ability to secure
          future loans. {"\n"}3.2. Lenders consider credit history when
          assessing loan applications, and a negative credit history resulting
          from non-payment can lead to loan rejections or higher interest rates
          for future borrowing.
        </Text>
        <Text style={styles.paragraph}>
          4. Personal and Professional Consequences {"\n"}4.1. Defaulting on
          loan repayments and facing legal consequences can have adverse effects
          on your personal and professional life. {"\n"}4.2. Non-payment can
          cause stress, strain relationships, and damage your reputation. {"\n"}
          4.3. It may also affect employment prospects, as some employers
          conduct credit checks as part of the hiring process.
        </Text>
        <Text style={styles.paragraph}>
          5. Miscellaneous {"\n"}5.1. These terms and conditions constitute the
          entire agreement between you and Bank Horizon 6 and supersede any
          prior agreements or understandings, whether written or verbal. {"\n"}
          5.2. Clearview Finance reserves the right to modify or amend these
          terms and conditions at any time. Any changes will be communicated to
          you through appropriate channels. {"\n"}5.3. If any provision of this
          Agreement is found to be invalid or unenforceable, the remaining
          provisions shall remain in full force and effect.
          {"\n"}
          5.4. This Agreement shall be governed by and construed in accordance
          with the laws of India.
        </Text>
        <Text style={styles.paragraph}>
          By using our services, you acknowledge that you have read, understood,
          and agreed to these terms and conditions. It is recommended to
          regularly review this page for any updates or changes.{"\n"}
          {"\n"}If you have any questions or concerns regarding these terms and
          conditions, please contact our customer support team for further
          assistance.
        </Text>
        <Text style={styles.paragraph}>
          If you have any questions about our terms and conditions, please
          contact us at clearviewfinance57@gmail.com
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

export default TermsAndConditions;
