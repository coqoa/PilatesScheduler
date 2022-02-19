import react, { useState } from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack" 
import {Text, View, TouchableOpacity, Modal, Alert} from "react-native"
import styled from "styled-components/native";

const NativeStack = createNativeStackNavigator();

//----------------------------------------------------------------------------------------------------------------

const Views = styled.View`
    flex: 1;
    background-color: white;
`
const TopNav = styled(Views)`
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`
const TopNavTitle = styled.Text`
    font-size: 18px;
    font-weight: 800;
    color: #2E4772;
`

const Calender = styled.TouchableOpacity`
	flex:13;
    width: 100%;
	justify-content: center;
	align-items: center;
    background-color: white;
`
const CalenderText = styled.Text`

`
const Modal1 = styled.Modal`
    flex: 1;
    
`
//----------------------------------------------------------------------------------------------------------------
const HomeScreen = ({navigation : {navigate}}) => (
    <Views>
        <TopNav>  
            <TopNavTitle>{"세컨무브필라테스"}</TopNavTitle>
        </TopNav>
        
        <Calender onPress={() => navigate("Cal")}>
            <CalenderText>달력</CalenderText>
        </Calender>
    </Views> 
)

const Cal = () => {
    return null
}

const Home = () => (

    <NativeStack.Navigator screenOptions={{headerShown:false}} >
        <NativeStack.Screen name="HomeScreen" component={HomeScreen} />
        <NativeStack.Screen name="Cal" component={Cal}/>
    </NativeStack.Navigator>
)

export default Home;
