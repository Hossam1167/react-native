import { useState } from "react";
import { StyleSheet, ImageBackground, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgoundImageStyle: {
    opacity: 0.15,
  },
});

export default function App() {
  return (
    <LinearGradient colors={["#e10e66", "#330347"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgoundImageStyle}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
