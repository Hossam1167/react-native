import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponet's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;
