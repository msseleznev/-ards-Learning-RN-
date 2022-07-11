import React, {useState} from 'react';
import {Button, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from '../../../bll/hooks';
import {loginTC} from "../../../bll/auth/login/login-reducer";
import {useAppNavigation} from "../types";

export const Login = () => {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState<string>('mikestm8979@gmail.com')
    const [password, setPassword] = useState<string>('11111111')

    const loginHandler = () => dispatch(loginTC({email, password, rememberMe: false}))

    const navigation = useAppNavigation()

    return (

        <View style={styles.container}>
            <TextInput style={styles.input}
                       placeholder="Email"
                       onChangeText={setEmail}
                       value={email}/>
            <TextInput style={styles.input}
                       placeholder="Password"
                       onChangeText={setPassword}
                       secureTextEntry={true}
                       value={password}/>
            <Button
                title="Login"
                onPress={loginHandler}
            />
            <View style={styles.forgotBox}>
                <Pressable onPress={() => {
                    navigation.navigate('Forgot')
                }}>
                    <Text>Forgot password?</Text>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate('Registration')
                }}>
                    <Text>Create account</Text>
                </Pressable>
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    forgotBox: {
        padding: 10
    }
});