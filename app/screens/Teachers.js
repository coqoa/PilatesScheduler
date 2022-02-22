import React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"
import DrawerNavigator from '../navigation/DrawerNavigator';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

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
// -------------------------------------------------------------------------------------------------------------------------

const TeacherListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const TeacherShell = styled.TouchableOpacity`
    flex-direction: row;
    height: 40px;
    border-radius: 7px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.REALLIGHTGRAY};
`
const TeacherName = styled.View`
    margin: 0px 10px;
`
const TeacherID = styled(TeacherName)``
const JoinDate = styled(TeacherName)``

const NameText = styled.Text`
    font-size: 16px;
    color: ${colors.DARKGRAY};
`
const IDText = styled(NameText)``
const JoinDateText = styled(NameText)``

// ---------------------------------------- TeacherList Component --------------------------------------------------
function TeacherList({name, id, date}) {
    return(
    <TeacherShell>
        <TeacherName>
            <NameText>{name}</NameText>
        </TeacherName>
        <TeacherID>
            <IDText>{id}</IDText>
        </TeacherID>
        <JoinDate>
            <JoinDateText>{date}</JoinDateText>
        </JoinDate>
    </TeacherShell>
    )
}
TeacherList.defaultProps = {
    name:"이름",
    id:"id",
    date:"입사일",
}

const Teachers = ({navigation}) => {
    
    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>강사 관리</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='검색'></SearchText>
        </SearchContainer>
        <TeacherListContainer>
            <TeacherList name={"김유진"} id={"rehiu"} date={"22.02.22"} />
        </TeacherListContainer>
        {/* 강사생성버튼(모달창) */}
    </Shell>
    </View>

    );
};

export default Teachers;