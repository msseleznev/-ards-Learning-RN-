import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../bll/hooks";
import {loginTC, logoutTC} from "../../../bll/auth/login/login-reducer";
import {height, width} from "../../constants/constants";
import {updateProfileUserData} from "../../../bll/profile/profile-reducer";

export const Profile = () => {

    const dispatch = useAppDispatch();
    const {name, avatar} = useAppSelector(state => state.profile.user);
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const isProfileFetching = useAppSelector<boolean>(state => state.profile.isProfileFetching);
    const [newNickname, setNewNickname] = useState(name);
    const [newAvatarURL, setNewAvatarURL] = useState('');
    const [newAvatar64, setNewAvatar64] = useState('');
    const logoutHandler = () => dispatch(logoutTC())

    const updateNickName = () => {
        if (newNickname.trim() !== name) {
            dispatch(updateProfileUserData(newNickname))
        }
    };

    console.log(avatar)

    return (
        <View style={styles.profileContainer}>
            <View style={[styles.borderAvatar, styles.elevation]}>
                <Image style={styles.avatar} source={{uri: avatar}}/>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setNewNickname}
                value={newNickname}
            />

        </View>

    );
};

const avatarWidth = width / 3 + 15
const styles = StyleSheet.create({

    profileContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e1e1e1"
    },
    borderAvatar: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#59CAF9FF",
        width: avatarWidth + 15,
        height: avatarWidth + 15,
        borderRadius: width / 4 + 15,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#59CAF9FF',
    },
    avatar: {
        width: avatarWidth,
        height: avatarWidth,
        borderRadius: width / 4,
    },
    input: {
        height: 40,
        width: avatarWidth,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});