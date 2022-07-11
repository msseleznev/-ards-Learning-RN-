import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/bll/store";
import {Main} from "./src/ui/screens/Main/Main";

export default function App() {
    return (

        <NavigationContainer>
            <Provider store={store}>
                <View style={styles.container}>
                    <Main/>
                    <StatusBar backgroundColor="#59CAF9"/>
                </View>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
