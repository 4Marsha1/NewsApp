import { AsyncStorage } from "react-native";

export const _storeData = async (key, value) => {
    try {
        await localStorage.setItem(
            key,
            value
        );
    } catch (error) {
        // Error saving data
    }
};

export const _retrieveData = async (key) => {
    try {
        const value = await localStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};