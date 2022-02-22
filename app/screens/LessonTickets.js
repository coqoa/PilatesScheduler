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
// ----
const LessonTicketsListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const LessonTicketShell = styled.TouchableOpacity`
    flex-direction: column;
    height: 200px;
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
    align-items: center;
`
const Line2 = styled(Line1)``
const Line3 = styled(Line1)``
const Line4 = styled(Line1)``
const Line5 = styled(Line1)``
const Line6 = styled(Line1)``
const Line7 = styled(Line1)``

const Line1Text = styled.Text`
    color: ${colors.GRAY};
`
const Line2Text = styled(Line1Text)``
const Line3Text = styled(Line1Text)``
const Line4Text = styled(Line1Text)``
const Line5Text = styled(Line1Text)``
const Line6Text = styled(Line1Text)``
const Line7Text = styled(Line1Text)``

const Type = styled.Text`
    margin-right: 5px;
    font-size: 12px;
    /* color: ${colors.REALDARKGRAY}; */
    
    `
const Teacher = styled(Type)``
const StudentName = styled(Type)``
const StudentID = styled(Type)``
const StartDate = styled(Type)``
const EndDate = styled(Type)``
const Remaining = styled(Type)``
const TotalCount = styled(Type)``


const TypeText = styled.Text`
    font-size: 15px;
`
const TeacherText = styled(TypeText)``
const StudentNameText = styled(TypeText)``
const StudentIDText = styled(TypeText)``
const StartDateText = styled(TypeText)``
const EndDateText = styled(TypeText)``
const RemainingText = styled(TypeText)``
const TotalCountText = styled(TypeText)``
// ---------------------------------------- StudentList Component --------------------------------------------------
function LessonTicketsList({branch,name,id,type,teacher,startDate,endDate,totalCount,remaining}) {
    return(
    <LessonTicketShell>
        <Line1>
            <Line1Text>센터이름 : </Line1Text>
            <StudentName><StudentNameText>{branch}</StudentNameText></StudentName>
        </Line1>
        <Line2>
            <Line2Text>이름(ID) : </Line2Text>
            <StudentName><StudentNameText>{name}</StudentNameText></StudentName>
            <StudentID><StudentIDText>({id})</StudentIDText></StudentID>
        </Line2>
        <Line3>
            <Line3Text>회원타입 : </Line3Text>
            <Type><TypeText>{type}</TypeText></Type>
        </Line3>
        <Line4>
            <Line4Text>담당강사 : </Line4Text>
            <Teacher><TeacherText>{teacher}</TeacherText></Teacher>
        </Line4>
        <Line5>
            <Line5Text>시작일자 : </Line5Text>
            <StartDate><StartDateText>{startDate}</StartDateText></StartDate>
        </Line5>
        <Line6>
            <Line6Text>종료일자 : </Line6Text>
            <EndDate><EndDateText>{endDate}</EndDateText></EndDate>
        </Line6>
        <Line7>
            <Line7Text>잔여횟수 / 총 횟수 : </Line7Text>
            <Remaining><RemainingText>{remaining} /</RemainingText></Remaining>
            <TotalCount><TotalCountText>{totalCount}</TotalCountText></TotalCount>
        </Line7>
    </LessonTicketShell>
    )
}
LessonTicketsList.defaultProps = {
    branch:"__",
    name:"__",
    id:"__",
    type:"__",
    teacher:"",
    startDate:"____.__.__",
    endDate:"____.__.__",
    remaining:"__",
    totalCount:"__",
}

const LessonTickets = ({navigation}) => {
    
    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>내 수강권</TitleText>
        </TitleContainer>
        <LessonTicketsListContainer>
            <LessonTicketsList branch={"피크오브필라테스"} name={"최병민"} id={"coqoa"} type={"개인"} teacher={'김유진'} startDate={'2022.02.01'} endDate={'2022.02.28'} remaining={'6'} totalCount={'14'} />
        </LessonTicketsListContainer>
    </Shell>
    </View>
    );
};
export default LessonTickets;