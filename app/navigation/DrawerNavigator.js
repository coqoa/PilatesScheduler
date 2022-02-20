import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../screens/Menu";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "../Components/color";
import Home from "../screens/Home";
import {Ionicons} from "@expo/vector-icons"

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    // nonMember , manager , teacher , student
    
    const [memberType, setMemberType] = useState("manager");
    function memberCheck(){
        if(memberType === "nonMember"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{headerShown:false, drawerType: "front", drawerPosition: "left",}}>
                    <Drawer.Screen name="nonMember" component={Home} />
                    <Drawer.Screen name="회원가입" component={Home} />
                </Drawer.Navigator>
            )
        }else if(memberType === "manager"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{headerShown:false, drawerType: "front", drawerPosition: "left",
            }
                }>
                    <Drawer.Screen name="더 무브먼트" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Menu" component={Menu} />
                </Drawer.Navigator>
            )
        }else if(memberType === "teacher"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{headerShown:false, drawerType: "front", drawerPosition: "left",}}>
                    <Drawer.Screen name="teacher" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Menu" component={Menu} />
                </Drawer.Navigator>
            )
        }else if(memberType === "student"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{headerShown:false, drawerType: "front", drawerPosition: "left",}}>
                    <Drawer.Screen name="student" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Menu" component={Menu} />
                </Drawer.Navigator>
            )
        }
    }
    return( 
        memberCheck()
    )
}

export default DrawerNavigator;