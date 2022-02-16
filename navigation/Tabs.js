import Recat from 'react';
import {BottomTabView, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search";
import Management from "../screens/Management";
import { useColorScheme } from "react-native"
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();
const Tabs = () => {
    // const isDark = useColorScheme() === "dark" ;
    return (
        <Tab.Navigator screenOptions={{
            // tabBarStyle:{ backgroundColor: isDark ? "black" : "white"},
            // tabBarActiveTintColor: isDark ? "#feca57" : "#ff9f43",
            // headerStyle:{ backgroundColor: isDark ? "black" : "white"},
            // headerTitleStyle:{color: isDark ? "white" : "black"},
            // headerBackTitleVisible:false,
            headerShown:false
        }}>
            <Tab.Screen 
            name="홈" 
            component={Home}
            options={{
                tabBarIcon:({focused, color, size}) => <Ionicons name={focused? "home" : "home-outline"} color={color} size={size} />
            }} />
            <Tab.Screen 
            name="검색" 
            component={Search} 
            options={{
                tabBarIcon:({focused, color, size}) => <Ionicons name={"search"} color={color} size={size} />
            }} />
            <Tab.Screen 
            name="관리" 
            component={Management} 
            options={{
                tabBarIcon:({focused, color, size}) => <Ionicons name={"list"} color={color} size={size} />
            }} />
        </Tab.Navigator>
    )
}
export default Tabs;