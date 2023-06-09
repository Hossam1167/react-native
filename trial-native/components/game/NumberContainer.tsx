import React, { ReactElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.yallow,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.yallow,
    fontSize: 36,
    fontWeight: "bold",
  },
});

interface NumberContainerProps {
  children: ReactElement[] | number;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
