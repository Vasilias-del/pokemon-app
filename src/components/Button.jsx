import { Text, TouchableOpacity } from "react-native";
import styles from "./styles/styles";

export default function Button(props) {
  const { onPress, children } = props
  return (
    <TouchableOpacity 
      {...props}
      style={styles.button}
      onPress={onPress}
    >
      <Text
        style={styles.white}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}