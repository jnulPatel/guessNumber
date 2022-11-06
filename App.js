import React, { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFontsLoaded, setisFontsLoaded] = useState(false);
  const [currentGuessCount, setCurrentGuessCount] = useState(1);

  useEffect(() => {
    (async function () {
      await Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      });
      setisFontsLoaded(true);
    })();
  });

  function pickedNumberHandler(pickedNum) {
    setUserNumber(pickedNum);
  }
  function gameOverHandler() {
    setIsGameOver(true);
  }

  function newGameHadler() {
    setIsGameOver(false);
    setUserNumber("");
    currentGuessCount(1);
  }

  function guessCount() {
    setCurrentGuessCount(currentGuessCount + 1);
  }

  let screen = <StartGame getPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        OnGuessCount={guessCount}
      />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        onNewGame={newGameHadler}
        userNumber={userNumber}
        guessCount={currentGuessCount}
      />
    );
  }

  (async function () {
    if (isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  })();

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.container}
    >
      <StatusBar style="inverted" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImg}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15,
  },
});
