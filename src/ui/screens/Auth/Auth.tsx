import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {AuthStackType} from "../types";
import {Login} from "./Login";
import {View} from "react-native";
import {Forgot} from "./Forgot";
import { Registration } from './Registration';

const Stack = createNativeStackNavigator<AuthStackType>();

export const Auth = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Forgot"} component={Forgot}/>
                <Stack.Screen name={"Registration"} component={Registration}/>
            </Stack.Navigator>
        </>
    );
};
