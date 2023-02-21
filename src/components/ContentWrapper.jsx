import { View } from "react-native";
import styles from "./styles/styles";

export default function ContentWrapper(props) {
  const { children } = props
  return (
    <View 
      style={styles.container}
    >
      {children}
    </View>
  );
}