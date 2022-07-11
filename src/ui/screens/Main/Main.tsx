import {MainStackParamsType} from "../types";
import {useAppDispatch, useAppSelector} from "../../../bll/hooks";
import {Auth} from "../Auth/Auth";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import {Packs} from "./Packs";
import {StyleSheet, Text, View} from "react-native";
import {logoutTC} from "../../../bll/auth/login/login-reducer";
import {Profile} from "./Profile";

const Tabs = createBottomTabNavigator<MainStackParamsType>();
// const Tabs = createDrawerNavigator<MainStackParamsType>();

export const Main = () => {
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const dispatch = useAppDispatch();
    const logoutHandler = () => dispatch(logoutTC())
    return (
        <>
            {!isLoggedIn
                ? <Auth/>
                : <>
                    <Tabs.Navigator screenOptions={({route}) => {
                        let iconName: keyof typeof MaterialCommunityIcons.glyphMap
                        if (route.name === 'Packs') iconName = 'cards'
                        if (route.name === 'Search') iconName = 'layers-search-outline'
                        if (route.name === 'Profile') iconName = 'account'
                        return {
                            tabBarIcon: ({focused}) => <MaterialCommunityIcons style={styles.tabBar} name={iconName}
                                                                               size={focused ? 32 : 25}/>,
                            header: ({navigation, route, options}) => <View style={styles.header}>
                                <View style={styles.headerContainer}>
                                    <Text style={styles.headerName}>{route.name}</Text>
                                    {route.name === 'Packs'
                                        && <Ionicons name={'add'} size={40}
                                                     style={styles.headerIcon}/>}
                                    {route.name === 'Profile'
                                        && <MaterialCommunityIcons onPress={logoutHandler}
                                                                   name={'logout'} size={35}
                                                                   style={styles.headerIcon}/>}
                                </View>
                            </View>

                        }
                    }}>
                        <Tabs.Screen name="Packs" component={Packs}/>
                        <Tabs.Screen name="Search" component={Profile}/>
                        <Tabs.Screen name="Profile" component={Profile}/>
                    </Tabs.Navigator>
                </>}
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
    },
    headerContainer: {
        marginHorizontal: 20,
        marginVertical: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

    },
    headerIcon: {
        color: "#42A5F5"
    },
    headerName: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 5,
        color: "#42A5F5"
    },
    tabBar: {
        color: "#42A5F5"
    }

});
