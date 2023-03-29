import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    marginTop: 100,
    borderRadius: 8,
    marginHorizontal: 24,
    backgroundColor: "#ececec",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});

const StartGameScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <TextInput
        style={styles.inputArea}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonHolder}>
          <PrimaryButton buttonLabel="Reset" />
        </View>
        <View style={styles.buttonHolder}>
          <PrimaryButton buttonLabel="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;
