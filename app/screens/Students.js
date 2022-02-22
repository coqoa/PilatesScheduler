import React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"

const GoBackBtn = styled.TouchableOpacity`
    position: absolute;
    left: 5px;
    top: 10px;

`

const Shell = styled.View`
    flex: 1;
    margin: 20px;
    padding-top: 40px;
    background-color: white;
    border-radius: 10px;
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

const StudentListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const StudentShell = styled.TouchableOpacity`
    flex-direction: column;
    height: 140px;
    border-radius: 7px;
    margin-bottom: 10px;
    padding-left: 15px;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid ${colors.REALLIGHTGRAY};
`
const Line1 = styled.View`
    flex-direction: row;
    margin-top: 5px;
`
const Line2 = styled(Line1)``
const Line3 = styled(Line1)``
const Line4 = styled(Line1)``
const Line5 = styled(Line1)``

const Line1Text = styled.Text`
    color: ${colors.GRAY};
    `
const Line2Text = styled(Line1Text)``
const Line3Text = styled(Line1Text)``
const Line4Text = styled(Line1Text)``
const Line5Text = styled(Line1Text)``

const Type = styled.Text`
    margin-right: 5px;
    font-size: 15px;
    color: ${colors.REALDARKGRAY};

`
const Teacher = styled(Type)``
const StudentName = styled(Type)``
const StudentID = styled(Type)``
const StartDate = styled(Type)``
const EndDate = styled(Type)``
const Remaining = styled(Type)``
const TotalCount = styled(Type)``


const TypeText = styled.Text``
const TeacherText = styled(Type)``
const StudentNameText = styled(Type)``
const StudentIDText = styled(Type)``
const StartDateText = styled(Type)``
const EndDateText = styled(Type)``
const RemainingText = styled(Type)``
const TotalCountText = styled(Type)``
// ---------------------------------------- StudentList Component --------------------------------------------------
function StudentList({name,id,type,teacher,startDate,endDate,totalCount,remaining}) {
    return(
    <StudentShell>
        <Line1>
            <Line1Text>이름, ID : </Line1Text>
            <StudentName><StudentNameText>{name} ,</StudentNameText></StudentName>
            <StudentID><StudentIDText>{id}</StudentIDText></StudentID>
        </Line1>
        <Line2>
            <Line2Text>타입, (담당강사) : </Line2Text>
            <Type><TypeText>{type} ,</TypeText></Type>
            <Teacher><TeacherText>{teacher}</TeacherText></Teacher>
        </Line2>
        <Line3>
            <Line3Text>시작일자 : </Line3Text>
            <StartDate><StartDateText>{startDate}</StartDateText></StartDate>
        </Line3>
        <Line4>
            <Line4Text>종료일자 : </Line4Text>
            <EndDate><EndDate>{endDate}</EndDate></EndDate>
        </Line4>
        <Line5>
            <Line5Text>잔여횟수 / 총 횟수 : </Line5Text>
            <Remaining><RemainingText>{remaining} /</RemainingText></Remaining>
            <TotalCount><TotalCountText>{totalCount}</TotalCountText></TotalCount>
        </Line5>
    </StudentShell>
    )
}
StudentList.defaultProps = {
    name:"__",
    id:"__",
    type:"__",
    teacher:"",
    startDate:"____.__.__",
    endDate:"____.__.__",
    remaining:"__",
    totalCount:"__",
}

const Students = ({navigation}) => {
    
    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>회원 관리</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='검색'></SearchText>
        </SearchContainer>
        <StudentListContainer>
            <StudentList name={"최병민"} id={"coqoa"} type={"개인"} teacher={'김유진'} startDate={'2022.02.01'} endDate={'2022.02.28'} remaining={'6'} totalCount={'14'} />
        </StudentListContainer>
    </Shell>
    </View>
    );
};
export default Students;