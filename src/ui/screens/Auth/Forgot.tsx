import React from 'react';
import {Button, View} from "react-native";
import {useAppNavigation} from "../types";

export const Forgot = () => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Button title={'to Registration'}  onPress={()=>{navigation.navigate('Registration')}}/>
        </View>
    );
};
