import { View } from 'react-native';
import styles from './styles/styles';

export default function Card (props) {
  const { children } = props
  return (
    <View
      style={styles.card}
    >
      <View
        style={styles.cardContent}
      >
        {children}
      </View>
    </View>
  )
}