import { Alert, FlatList, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GameLogs from "../components/game/GameLogs";

function generateRandomNumBtwn(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (min === max || isNaN(rndNum)) {
    generateRandomNumBtwn(1, 100, exclude);
    return;
  } else if (rndNum === exclude) {
    generateRandomNumBtwn(min, max, exclude);
    return;
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
const GameScreen = ({ userNumber, onGameOver, OnGuessCount }) => {
  const initialGuess = generateRandomNumBtwn(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
      minBoundry = 1;
      maxBoundry = 100;
      return;
    }
    if (!currentGuess) {
      setCurrentGuess(generateRandomNumBtwn(1, 100));
      return;
    }
  }, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction) {
    if (direction === "lower") {
      if (currentGuess < userNumber) {
        setCurrentGuess(userNumber);
        return;
      }
      maxBoundry = currentGuess;
    } else {
      if (currentGuess > userNumber) {
        setCurrentGuess(userNumber);
        return;
      }
      minBoundry = currentGuess + 1;
    }
    const newRndNum = generateRandomNumBtwn(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    console.log(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newRndNum);
    setGuessRound((prev) => [newRndNum, ...prev]);
    OnGuessCount();
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Heigher Or Lower ?
        </InstructionText>
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton
              onPress={() =>
                currentGuess < userNumber
                  ? nextGuessHandler("greater")
                  : Alert.alert(
                      "Don't Lie",
                      "You know that this is worong...",
                      [{ text: "Sorry!", style: "cancel" }]
                    )
              }
            >
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton
              onPress={() =>
                currentGuess > userNumber
                  ? nextGuessHandler("lower")
                  : Alert.alert(
                      "Don't Lie",
                      "You know that this is worong...",
                      [{ text: "Sorry!", style: "cancel" }]
                    )
              }
            >
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRound}
          renderItem={(itemData) => (
            <GameLogs roundNum={itemData.index} guess={itemData.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 20,
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
  instructionText: {
    margin: 20,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
