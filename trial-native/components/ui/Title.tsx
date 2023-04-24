import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
});

interface TitleProps {
  children: string;
}
const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
