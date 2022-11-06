import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ onNewGame, userNumber, guessCount }) => {
  const { width, height } = useWindowDimensions();
  const imgContainerWidthHeight =
    height > width ? (width * 80) / 100 : (height * 40) / 100;
  const imgContainerradius =
    height > width ? (width * 80) / 100 / 2 : (height * 40) / 100 / 2;
  const screenPadding = height > width ? 24 : 12;
  const imgContainerMargin = height > width ? 36 : 10;
  const summryMargin = height > width ? 24 : 5;
  return (
    <ScrollView style={[styles.screen, { padding: screenPadding }]}>
      <View style={[styles.container, { padding: screenPadding }]}>
        <Title>GAME OVER!</Title>
        <View
          style={[
            styles.imgContainer,
            {
              height: imgContainerWidthHeight,
              width: imgContainerWidthHeight,
              borderRadius: imgContainerradius,
              margin: imgContainerMargin,
            },
          ]}
        >
          <Image
            style={styles.img}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={[styles.summuryText, { marginVertical: summryMargin }]}>
          Your Phone needed
          <Text style={styles.higlightText}> {guessCount} </Text>
          rounds to Guess the Number
          <Text style={styles.higlightText}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  summuryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  higlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
});
