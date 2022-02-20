import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import Menu from "../screens/Menu";

const Tabs = createNativeStackNavigator();

const Navigator = () => {
    return(
    <Tabs.Navigator screenOptions={{headerShown: false}}>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Menu" component={Menu} />
    </Tabs.Navigator>
    )
}

// export default Navigator;