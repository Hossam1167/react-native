import React, { ReactElement } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primaryColor,
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

export interface PrimaryButtonProps {
  buttonLabel?: string;
  onPressProp: () => void;
  children?: React.ReactNode;
}

const PrimaryButton = ({
  buttonLabel,
  onPressProp,
  children,
}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPressProp}
        android_ripple={{ color: colors.Primary600 }}
      >
        <Text style={styles.buttonLable}>{buttonLabel || children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
