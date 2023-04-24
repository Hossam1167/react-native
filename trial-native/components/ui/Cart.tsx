import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

interface cartProps {
  children: React.ReactNode;
}

const Cart = ({ children }: cartProps) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Cart;
