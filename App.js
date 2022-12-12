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
import { useEffect, useState } from 'react';
import { _retrieveData } from './utils';

const Stack = createStackNavigator();

export default function App() {
    const scheme = useColorScheme();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (_retrieveData("email")) {
            console.log(_retrieveData("email"));
            setIsAuthenticated(true);
        }
    }, [])
    console.log(isAuthenticated);

    return (
        <Provider store={store}>
            <AppearanceProvider>
                <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
                    <Stack.Navigator>
                        {
                            !isAuthenticated && <Stack.Screen name="Login" component={Login} />
                        }
                        {
                            isAuthenticated && <>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen name="Details" component={Details} />
                                <Stack.Screen name="Modal" component={MyModal} /></>
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            </AppearanceProvider>
        </Provider>
    );
}