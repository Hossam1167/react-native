import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#151515",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  buttonLable: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.75,
  },
});

interface PrimaryButtonProps {
  buttonLabel: string;
  onPressProp: () => void;
}

const PrimaryButton = ({ buttonLabel, onPressProp }: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPressProp}
        android_ripple={{ color: "#cac7c7" }}
      >
        <Text style={styles.buttonLable}>{buttonLabel}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
