import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ onNewGame, userNumber, guessCount }) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summuryText}>
        Your Phone needed <Text style={styles.higlightText}>{guessCount} </Text>
        rounds to Guess the Number
        <Text style={styles.higlightText}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: "100%",
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
    margin: 36,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  summuryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  higlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
});
