import React from "react";
import {Text, View} from "react-native";
import GlobalState from "./src/context/GlobalState";

const App = () => {
    return (
        <GlobalState>
            <View>
                <Text>Hello World!</Text>
            </View>
        </GlobalState>
    );
};

export default App;