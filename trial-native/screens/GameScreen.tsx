import { View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Cart from "../components/ui/Cart";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
});

const genrateRandomBetween: (
  min: number,
  max: number,
  exclude: number
) => number = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return genrateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

interface GameScreenProps {
  userNumber: number;
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initialGuess = genrateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't Lie", "You know it's Wrong ...", [
        { text: "sorry", style: "cancel" },
      ]);
    }

    if (direction === "greater") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = genrateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cart>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPressProp={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPressProp={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Cart>
    </View>
  );
};

export default GameScreen;
