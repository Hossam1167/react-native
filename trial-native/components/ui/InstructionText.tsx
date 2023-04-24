import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  instructionText: {
    color: colors.primaryColor,
    fontSize: 24,
  },
});

interface instructionTextProps {
  children: string;
}
const InstructionText = ({ children }: instructionTextProps) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;
