import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors.android";
const InstructorText = ({ children, style }) => {
  return <Text style={[styles.instructionText]}>{children}</Text>;
};

export default InstructorText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
