import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios"
            ? [styles.btnInnerContainer, { backgroundColor: Colors.primary600 }]
            : styles.btnInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
  },
  btnInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});
