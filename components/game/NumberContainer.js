import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontSize: 26,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
