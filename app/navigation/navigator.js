import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import DrawerNavigator from './DrawerNavigator';



const Tabs = createNativeStackNavigator();

const Navigator = () => {
    return (
    <Tabs.Navigator screenOptions={{headerShown: false}}>
        {/* <Tabs.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
        <Tabs.Screen name="Login" component={Login} />
        <Tabs.Screen name="Signup" component={Signup} />
        <Tabs.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Tabs.Navigator>
    );
};

export default Navigator;