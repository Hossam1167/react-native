import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

const styles = StyleSheet.create({
  appContainer: {},
});

export default function App() {
  return <StartGameScreen />;
}
