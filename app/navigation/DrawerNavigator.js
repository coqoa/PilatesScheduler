import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, TouchableOpacity, View } from "react-native";
import Home from "../screens/Home";
import Menu from "../screens/Menu";
import {Ionicons} from "@expo/vector-icons"
import colors from "../Components/color";
import Signup from "../screens/Signup";
import Lessons from '../screens/Lessons';
import Teachers from '../screens/Teachers';
import Students from "../screens/Students";
import Sequences from "../screens/Sequence";
import Templates from "../screens/Template";
import LessonTickets from '../screens/LessonTickets';

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
                    <Drawer.Screen name="nonMember" component={Signup} />
                </Drawer.Navigator>
            )
        }else if(memberType === "manager"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{
                    headerShown:false, 
                    drawerType: "front", 
                    drawerPosition: "left",
                    drawerActiveTintColor:"white",
                    drawerActiveBackgroundColor:`${colors.GRAY}`,
                    drawerInactiveTintColor:"white",
                    drawerStyle: {backgroundColor:`${colors.REALDARKGRAY}`}
                }}
                >
                    <Drawer.Screen name="Balance Body" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="수업 관리" component={Lessons} />
                    <Drawer.Screen name="강사 관리" component={Teachers} />
                    <Drawer.Screen name="회원 관리" component={Students} />
                </Drawer.Navigator>
            )
        }else if(memberType === "teacher"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{
                    headerShown:false, 
                    drawerType: "front", 
                    drawerPosition: "left",
                    drawerActiveTintColor:"white",
                    drawerActiveBackgroundColor:`${colors.GRAY}`,
                    drawerInactiveTintColor:"white",
                    drawerStyle: {backgroundColor:`${colors.REALDARKGRAY}`},
                }}
                >
                    <Drawer.Screen name="김유진 강사님" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="수업 관리" component={Lessons} />
                    <Drawer.Screen name="회원 관리" component={Students} />
                    <Drawer.Screen name="시퀀스 관리" component={Sequences} />
                    <Drawer.Screen name="템플릿 관리" component={Templates} />
                </Drawer.Navigator>
            )
        }else if(memberType === "student"){
            return(
                <Drawer.Navigator
                initialRouteName="Home" 
                screenOptions={{
                    headerShown:false, 
                    drawerType: "front", 
                    drawerPosition: "left",
                    drawerActiveTintColor:"white",
                    drawerActiveBackgroundColor:`${colors.GRAY}`,
                    drawerInactiveTintColor:"white",
                    drawerStyle: {backgroundColor:`${colors.REALDARKGRAY}`}
                }}
                >
                    <Drawer.Screen name="최병민 회원님" component={Home} />
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="내 수강권" component={LessonTickets} />
                </Drawer.Navigator>
            )
        }
    }
    return( 
        memberCheck()
    )
}

export default DrawerNavigator;