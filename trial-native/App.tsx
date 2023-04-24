import { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { colors } from "./constants/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgoundImageStyle: {
    opacity: 0.15,
  },
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [hasUserNumber, setHasUserNamber] = useState<number | null>(null);
  const [isAppReady, setIsAppReady] = useState(false);

  const startGameNumber = (startNumber: number) => {
    setHasUserNamber(startNumber);
  };

  const [fontIsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontIsLoading) {
      await SplashScreen.hideAsync();
    }
  }, [fontIsLoading]);

  if (!fontIsLoading) {
    return null;
  }

  return (
    <LinearGradient
      colors={[colors.pink, colors.blue]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
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
            <GameScreen userNumber={hasUserNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
