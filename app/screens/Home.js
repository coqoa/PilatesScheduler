import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import { View, Text, } from "react-native";
import colors from '../Components/color';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons"
import DrawerNavigator from "../navigation/DrawerNavigator";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
    flex: 1;
    /* align-items: center; */
    /* justify-content: flex-end; */
    width: 100%;
    `
const TopNavUpper = styled.View`
    flex: 2; 
    /* width: 100%;
    background-color: orange; */
    flex-direction: row;
    /* margin-top: 20px; */
    margin-bottom: 5px;
    /* border: 1px solid gray; */
`
    const Member = styled.View`
        flex: 1;
        flex-direction: column;
        margin: -10px 10px;
        /* width: 100%; */
        /* background-color: tomato; */
    `
        const Branch = styled.View`
        flex: 1;
        /* width: 100%;
        background-color: gray; */
        align-items: flex-start;
        justify-content: center;
        `
        const BranchBtn = styled.TouchableOpacity``
        const BranchText = styled.Text`
            font-size: 13;
            font-weight: 500;
            color: ${colors.NAVY};
        `
        const MemberType = styled.View`
        flex: 1;
        /* width: 100%;
        background-color: yellow; */
        align-items: flex-start;
        justify-content: flex-start;
        `
        const MemberTypeText = styled.Text`
            font-size: 10;
            color: ${colors.DARKGRAY};
        `
    const YYYYMM = styled.View`
        margin-right: 25px;
        flex: 1;
        align-items: center;
        justify-content: center;
    `
    const YYYY = styled.Text`
    flex: 1;
        font-size: 20;
        font-weight: 300;
        color: ${colors.NAVY};
        /* margin-top: 4px; */
    `
    const MM = styled.Text`
    flex: 2;
        font-size: 40;
        font-weight: 700;
        color: ${colors.NAVY};
    `
    // const DD = styled.Text`
    // flex: 1;
    //     font-size: 13;
    //     font-weight: 400;
    //     color: ${colors.NAVY};
    // `
    const Option = styled.View`
        flex: 1;
        align-items: flex-end;
        `
    const OptionBtn = styled.TouchableOpacity`
        margin: 10px;
    `
    const OptionText = styled.Text``

const TopNavLower = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 0px 0px;
    /* width: 100%;
    background-color: red; */
`
const SearchClass = styled.View`
    flex: 7;
    /* width: 100%;
    background-color: lightblue; */
    align-items: center;
    justify-content: center;
`
const SearchBar = styled.TextInput`
width: 95%;
height: 35px;
background-color: white;
padding: 0px 10px;
border-radius: 11;
border: 1px solid lightgray;
box-shadow: 1px 1px 1px rgba(0,0,0,0.2);
`
const CreateClass = styled.View`
    flex: 1;
    /* width: 100%;
    background-color: beige; */
    align-items: center;
    justify-content: center;
`
const CreateBtn = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    background-color: ${colors.TOMATO};
    border-radius: 7;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 1px ${colors.TOMATO};
`
const CreateBtnText = styled.Text`
    color: white;
    font-size: 20;
    font-weight:600;
`

const SchedulerArea = styled.ScrollView`
    flex: 5;
    width: 100%;
    margin-top: 10px;
    border-top-left-radius: 25;
    border-top-right-radius: 25;
    background-color: white;
`
const Home = ({navigation}) => {

    return(
    <Shell>
        <TopNavArea>
            <TopNavUpper>
                <Member>
                    <Branch>
                        <BranchBtn>
                            <BranchText>Balance Body</BranchText>
                        </BranchBtn>
                    </Branch>
                    <MemberType><MemberTypeText>최병민 회원님</MemberTypeText></MemberType>
                </Member>
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
            </TopNavUpper>
            
            <TopNavLower>
                <SearchClass>
                    <SearchBar placeholder="Search">
                    </SearchBar>
                </SearchClass>
                <CreateClass>
                    <CreateBtn>
                        <CreateBtnText>+</CreateBtnText>
                    </CreateBtn>
                </CreateClass>
            </TopNavLower>
        </TopNavArea>
        <SchedulerArea contentContainerStyle={{alignItems:"center", flex:1}}>
            <View>
                <Text style={{flex:1}}></Text>
            </View>
        </SchedulerArea>
    </Shell>
    )
        
}

export default Home;