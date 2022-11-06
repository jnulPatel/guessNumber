import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const GameLogs = ({ roundNum, guess }) => {
  const { width, height } = useWindowDimensions();
  const size = height > width ? "100%" : "80%";
  return (
    <View style={[styles.listItem, { width: size }]}>
      <Text style={styles.itemText}>#{roundNum}</Text>
      <Text style={styles.itemText}> Opponent's Guess : {guess}</Text>
    </View>
  );
};

export default GameLogs;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    alignSelf: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
