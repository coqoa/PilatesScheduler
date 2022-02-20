import Recat from 'react';
import {BottomTabView, createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search";
import Management from "../screens/Management";
import {Ionicons} from "@expo/vector-icons"


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle:{
                fontSize: 10,
                fontWeight: "500",
                marginBottom: 2
            },
            tabBarStyle:{
                // backgroundColor:"#F9EBEB"
            },
            tabBarActiveTintColor:"#023CA0",
            tabBarInactiveTintColor:"gray",
            headerShown:false
        }}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                // headerShown: false,
                tabBarIcon:({focused, color, size}) => <Ionicons name={"home"} color={color} size={size} />
            }} />
            <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarIcon:({focused, color, size}) => <Ionicons name={"search"} color={color} size={size} />
            }}/>
            <Tab.Screen 
            name="Management" 
            component={Management} 
            options={{
                tabBarIcon:({focused, color, size}) => <Ionicons name={"menu-sharp"} color={color} size={size} />
            }}/>
        </Tab.Navigator>
    )
}
export default Tabs;