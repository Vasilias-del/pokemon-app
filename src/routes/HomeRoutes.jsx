import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactUsPage from '../screens/Form/ContactUsPage';
import HomePage from '../screens/Home/HomePage';
import PokemonCatalogPage from '../screens/Pokemon/PokemonCatalogPage';
import PokemonDetailPage from '../screens/Pokemon/PokemonDetailPage';

const Stack = createNativeStackNavigator()

export default function HomeRoutes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{ headerShown: true }}
          // initialRouteName={HomePage}
        >
          <Stack.Screen
            name='Home'
            component={HomePage}
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen
            name='Contact'
            component={ContactUsPage}
            options={{ title: 'Contact Us' }}
          />
          <Stack.Screen
            name='Catalog'
            component={PokemonCatalogPage}
            options={{ title: 'Pokemon Catalog' }}
          />
          <Stack.Screen
            name='Detail'
            component={PokemonDetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  

