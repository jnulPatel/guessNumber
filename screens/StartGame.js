import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGame = ({ getPickedNumber }) => {
  const [entredNumber, setEntredNumber] = useState("");
  const numberHandler = (entredText) => {
    setEntredNumber(entredText);
  };
  const confirmBtnHandler = () => {
    const chosenNum = parseInt(entredNumber);
    if (isNaN(chosenNum) || entredNumber < 0 || entredNumber > 100) {
      Alert.alert("Warning", "Please Enter Valid Number", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    getPickedNumber(chosenNum);
  };
  const resetHandler = () => {
    setEntredNumber("");
  };

  const { height, width } = useWindowDimensions();

  const marginTopDistance =
    height > width ? (width * 25) / 100 : (height * 10) / 100;

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={numberHandler}
              value={entredNumber}
              onSubmitEditing={confirmBtnHandler}
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.btnContainer}>
                <PrimaryButton onPress={confirmBtnHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    height: 50,
    color: Colors.accent500,
    fontSize: 36,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
