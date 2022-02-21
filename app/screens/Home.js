import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import { View, Text, } from "react-native";
import colors from '../Components/color';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons"
import DrawerNavigator from "../navigation/DrawerNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function addStringZero(time){
    if(parseInt(time)<10)
        return "0"+time;
    else
        return time;
}
const date = new Date();
const getFullYear = date.getFullYear();
const getMonth = addStringZero(date.getMonth()+1);
const getDate = addStringZero(date.getDate());


const Shell = styled.View`
    flex: 1;
    background-color: ${colors.bgColor};
`
const TopNavArea = styled.View`
    height: 12%;
    /* width: 100%; */
    `
const YYYYMM = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
`
const YYYY = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.NAVY};
`
const MM = styled.Text`

    font-size: 40px;
    font-weight: 800;
    color: ${colors.NAVY};
    `
const Option = styled.View`
    position: absolute;
    right: 0px;
    `
const OptionBtn = styled.TouchableOpacity`
    margin: 5px;
`
const OptionText = styled.Text`
    color: ${colors.DARKGRAY};
`




const SchedulerArea = styled.View`
    flex: 1;
    width: 100%;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: white;
    align-items: center;

`
const BranchShell = styled.View``
const BranchBtn = styled.TouchableOpacity`
margin: 10px;
`
const BranchText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.NAVY};
`
const CalendarShell = styled.ScrollView`
    border: 1px solid ${colors.REALLIGHTGRAY};
    width: 100%;
`

const CreateClass = styled.View`
    position: absolute;
    right: 10px;
    bottom: 30px;
    /* background-color: red; */
`
const CreateBtn = styled.TouchableOpacity`
    width: 60px;
    height: 60px;

    border-radius: 50px;
`
const CreateBtnText = styled.Text`
    color: white;
`

const Home = ({navigation}) => {

    return(
    <Shell>
        <TopNavArea>
            <YYYYMM>
                <YYYY>{getFullYear}</YYYY>
                <MM>{getMonth}</MM>
            </YYYYMM>
            <Option>
                <OptionBtn  onPress={() => navigation.openDrawer()}>
                {/* <OptionBtn> */}
                    <OptionText><Ionicons name={"menu-sharp"} size={20} /></OptionText>
                </OptionBtn>
            </Option>
        </TopNavArea>
        <SchedulerArea>
            <BranchShell>
                <BranchBtn>
                    <BranchText>Balance Body</BranchText>
                </BranchBtn>
            </BranchShell>

            <CalendarShell>
                {/* 캘린더공간 */}
                {/* left:날짜:View */}
                {/* right: 시간:scrollview:horizontal */}
            </CalendarShell>
                <CreateClass>
                    <CreateBtn>
                        <CreateBtnText><Ionicons name={"ios-add-circle"} size={60} color={`${colors.TOMATO}`} /></CreateBtnText>
                    </CreateBtn>
                </CreateClass>

        </SchedulerArea>
        
    </Shell>
    )
        
}

export default Home;