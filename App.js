import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Bienvenue" component={Welcome} />
                <Stack.Screen name="Accueil" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}