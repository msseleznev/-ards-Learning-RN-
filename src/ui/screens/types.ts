import {NavigationProp, NavigatorScreenParams, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";

export type RootStackParamList = {
    Login: undefined
    Registration: undefined
    Forgot: undefined
    Main: NavigatorScreenParams<MainStackParamsType>
}

export type MainStackParamsType = {
    Packs: undefined
    Search: undefined
    Add: undefined
    Profile: undefined
}
export type AuthStackType = {
    Login: undefined
    Registration: undefined
    Forgot: undefined

}

export type PacksPropsType = NativeStackScreenProps<MainStackParamsType, 'Packs'>
export type CardsPropsType = NativeStackScreenProps<MainStackParamsType, 'Search'>
export type ProfilePropsType = NativeStackScreenProps<MainStackParamsType, 'Profile'>

export type NavigationUseType = NavigationProp<RootStackParamList>



export const useAppNavigation = () => useNavigation<NavigationUseType>()