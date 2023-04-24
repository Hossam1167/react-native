import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { colors } from "../constants/colors";
const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    marginTop: 100,
    borderRadius: 8,
    marginHorizontal: 24,
    backgroundColor: colors.grey,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonHolder: {
    flex: 1,
  },
  inputArea: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: colors.yallow,
    borderBottomWidth: 2,
    color: colors.yallow,
    marginVertical: 8,
    fontWeight: "bold",
  },
});

interface StartGameScreenProps {
  onStartNumber: (chosenNumber: number) => void;
}

const StartGameScreen = ({ onStartNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const restAlertInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: restAlertInputHandler }]
      );
      return;
    }
    onStartNumber(chosenNumber);
  };
  return (
    <View style={styles.screenContainer}>
      <TextInput
        style={styles.inputArea}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonHolder}>
          <PrimaryButton
            buttonLabel="Reset"
            onPressProp={restAlertInputHandler}
          />
        </View>
        <View style={styles.buttonHolder}>
          <PrimaryButton
            buttonLabel="Confirm"
            onPressProp={confirmButtonHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
