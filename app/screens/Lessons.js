import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"
import Modal from "react-native-modal";
import LessonModalComponent from '../Components/ModalComponent/LessonModalComponent';
import DefaultModal from '../Components/DefaultModal';

const GoBackBtn = styled.TouchableOpacity`
    position: absolute;
    left: 5px;
    top: 10px;
`
const Shell = styled.View`
    flex: 1;
    margin: 20px;
    padding-top: 40px;
    /* padding-left: 5px;
    padding-right: 5px; */
    background-color: white;
    border-radius: 10px;
    /* border: 1px solid gray; */
`
const TitleContainer = styled.View`
    height: 10%;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5%;
`
const TitleText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${colors.NAVY};
`
const SearchContainer = styled.View`
    height: 10%;
    align-items: center;
    justify-content: center;
`
const SearchText = styled.TextInput`
width: 90%;
height: 60%;
border-radius:7px;
padding-left: 10px;
border: 1px solid ${colors.REALLIGHTGRAY};
`
// ------------------------------------------------------------------------------------------------------------------------

const LessonListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const LessonShell = styled.TouchableOpacity`
    flex-direction: row;
    height: 60px;
    border-radius: 7px;
    padding: 0px 5px;
    margin-bottom: 10px;
    border: 1px solid ${colors.REALLIGHTGRAY};
`
const LessonInfo = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`
const Date = styled.Text`
    font-size: 13px;
    opacity: 0.5;
    margin: 1px;
`
const Time = styled(Date)``
const RoomNameText = styled(Date)``

const LessonName = styled.View`
    flex: 2;
    justify-content: center;
`
const LessonNameText = styled.Text`
    font-size: 16px;
`
// ---------------------------------------- LessonList Component --------------------------------------------------
function LessonList({date, time, roomName,lessonName,}) {
    return(
    <LessonShell>
        <LessonInfo>
            <Date> {date} </Date>
            <Time> {time} </Time>
            <RoomNameText>{roomName}</RoomNameText>
        </LessonInfo>
        <LessonName><LessonNameText>{lessonName}</LessonNameText></LessonName>
    </LessonShell>
    )
}
LessonList.defaultProps = {
    date:"??????",
    time:"??????",
    roomName:"?????????",
    lessonName:"????????????",
    bgColor:"#ffffff"
}

const Lessons = ({navigation}) => {
    

    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>?????? ??????</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='??????'></SearchText>
        </SearchContainer>
        <LessonListContainer>
            <LessonList date={"22.02.22"} time={"17:00~17:50"} roomName={"??????1??????"} />
        </LessonListContainer>
        {/* ???????????? ?????? ?????? */}
        {/* <DefaultModal /> */}
        <LessonModalComponent />
    </Shell>
    </View>
    );
};

export default Lessons;