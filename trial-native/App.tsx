import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

type UpdateGoalList = {
  setGoalsList: ([]) => [];
  goalsList: string[];
};

export default function App() {
  const [value, setValue] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler: (text: string) => void = entertText => {
    setValue(entertText);
  };
  const addGoalHandler = () => {
    setGoalsList(currentGoalList => [...currentGoalList, value]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,

    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: "100%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 35,
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: "60%",
  },
  goalsContainer: {
    flex: 5,
  },
});
