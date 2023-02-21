import { View } from "react-native";
import Button from "../../components/Button";
import ContentWrapper from "../../components/ContentWrapper";
import styles from "../../components/styles/styles";

export default function HomePage({ navigation }) {
  return (
    <ContentWrapper>
      <View 
        style={styles.buttonCenter}
      >
        <View
          style={styles.buttonSmall}
        >
          <Button onPress={() => navigation.navigate('Contact')}>
            Contact Us
          </Button>
          <Button onPress={() => navigation.navigate('Catalog')}>
            Catalog
          </Button>
        </View>
      </View>
    </ContentWrapper>
  );
}
