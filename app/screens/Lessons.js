import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"
import Modal from "react-native-modal";


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
// ---------------------모달관련-----------------
const AddBtn = styled.Pressable`
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid ${colors.LIGHTGRAY};
`
const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius:15px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CloseBtn = styled.Pressable`
    position: absolute;
    right: 10;
    top: 10;
    /* background-color: green; */
`
const ModalTitle = styled.View`
    height: 70px;
    width: 100%;
    align-items: center;
    justify-content: center;
    `
const ModalTitleText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${colors.REALDARKGRAY};
`
const ModalSubmitBtnShell = styled.View`
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const ModalSubmitBtn = styled.Pressable`
    width: 145px;
    height: 35px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.TOMATO};
`
const ModalSubmitBtnText = styled.Text`
    color: white;
    font-size: 17px;
    font-weight: bold;
`

const ModalContents = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid black;
    
`
const Line1 = styled.View``
const Line2 = styled(Line1)``
const Line3 = styled(Line1)``
const Line4 = styled(Line1)``

const Line1Text = styled.Text``
const Line2Text = styled(Line1Text)``
const Line3Text = styled(Line1Text)``
const Line4Text = styled(Line1Text)``
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
    date:"날짜",
    time:"시간",
    roomName:"방이름",
    lessonName:"수업이름",
    bgColor:"#ffffff"
}

const Lessons = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>수업 관리</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='검색'></SearchText>
        </SearchContainer>
        <LessonListContainer>
            <LessonList date={"22.02.22"} time={"17:00~17:50"} roomName={"체어1번룸"} />
        </LessonListContainer>
        
        {/* 모달관련 작업 시작 */}
        <AddBtn onPress={()=>setModalVisible(true)}>
            <Ionicons name="add" size={26} color= {`${colors.LIGHTGRAY}`} />
        </AddBtn>
        <Modal 
        isVisible={modalVisible}
        onBackdropPress = {() => setModalVisible(false)}
        >
            <ModalContainer>
                <CloseBtn onPress={()=>setModalVisible(false)}>
                    <Ionicons name="close" size={26} color= {`${colors.LIGHTGRAY}`} />
                </CloseBtn>
                <ModalTitle>
                    <ModalTitleText>타이틀</ModalTitleText>
                </ModalTitle>
                <ModalContents>
                    <Line1><Line1Text>모달내용작성</Line1Text></Line1>
                    <Line1><Line1Text>모달내용작성</Line1Text></Line1>
                    <Line1><Line1Text>모달내용작성</Line1Text></Line1>
                    <Line1><Line1Text>모달내용작성</Line1Text></Line1>
                    <Line1><Line1Text>모달내용작성</Line1Text></Line1>
                </ModalContents>
                <ModalSubmitBtnShell>
                    <ModalSubmitBtn>
                        <ModalSubmitBtnText>버튼이름</ModalSubmitBtnText>
                    </ModalSubmitBtn>
                </ModalSubmitBtnShell>
            </ModalContainer>
        </Modal>
    </Shell>
    </View>

    );
};

export default Lessons;