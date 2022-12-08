import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { login } from '../redux/actions/auth';

const Login = ({ navigation }) => {
    const userState = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        if (!email || !password) {
            console.log('invalid fields');
            return;
        } else {
            dispatch(login(email, password))
            navigation.navigate("Home")
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>News<Text style={styles.subHeading}>App</Text> </Text>
            </View>
            <Text style={styles.subject}>Get your <Text style={styles.subSubject}>trending news</Text> on a click!</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Email Id" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity style={styles.btn} onPress={() => loginUser()}>
                    <Text style={styles.btn_text}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%'
    },
    heading: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#E57B89',
    },
    subHeading: {
        color: 'black',
        borderBottomColor: '#E57B89',
        borderBottomWidth: 3,
    },
    subject: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    subSubject: {
        color: '#E57B89',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    input: {
        outline: 'none',
        backgroundColor: 'white',
        paddingVertical: 4,
        paddingHorizontal: 10,
        width: '80%',
        marginVertical: 4,
        borderBottomColor: '#E57B89',
        borderBottomWidth: 2,
    },
    btn: {
        width: '30%',
        backgroundColor: '#E57B89',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    btn_text: {
        textAlign: 'center',
        color: 'white',
    }
})