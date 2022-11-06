import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.insructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  insructionText: {
    fontSize: 22,
    fontFamily: "open-sans",
    color: Colors.accent500,
  },
});
