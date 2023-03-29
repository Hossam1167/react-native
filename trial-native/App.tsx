import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgoundImageStyle: {
    opacity: 0.15,
  },
});

export default function App() {
  const [hasUserNumber, setHasUserNamber] = useState<number | null>(null);

  const startGameNumber = (startNumber: number) => {
    setHasUserNamber(startNumber);
  };

  return (
    <LinearGradient colors={["#e10e66", "#330347"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgoundImageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>
          {!hasUserNumber ? (
            <StartGameScreen onStartNumber={startGameNumber} />
          ) : (
            <GameScreen />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
