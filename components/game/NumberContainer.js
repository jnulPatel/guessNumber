import { StyleSheet, Text, View, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontSize: deviceWidth < 350 ? 18 : 26,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
