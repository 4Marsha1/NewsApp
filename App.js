import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Login from './screens/Login';
import Home from './screens/Home';
import store from "./redux/store"
import Details from './screens/Details';
import MyModal from './components/Modal';

const Stack = createStackNavigator();

export default function App() {
    const scheme = useColorScheme();
    return (
        <Provider store={store}>
            <AppearanceProvider>
                <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Details" component={Details} />
                        <Stack.Screen name="Modal" component={MyModal} />
                    </Stack.Navigator>
                </NavigationContainer>
            </AppearanceProvider>
        </Provider>
    );
}