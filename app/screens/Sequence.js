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

const SequencesListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const SequencesShell = styled.TouchableOpacity`
    height: 120px;
    border-radius: 15px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 15px;
    border: 1px solid ${colors.REALLIGHTGRAY};
`
const Line1 = styled.View`
    flex-direction: row;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    `
const Line2 = styled(Line1)``
const Line3 = styled(Line1)``
const Line4 = styled(Line1)``

const Line1Text = styled.Text`
    width: 26%;
    color: ${colors.GRAY};
    font-size: 13px;
    
    `
const Line2Text = styled(Line1Text)``
const Line3Text = styled(Line1Text)``
const Line4Text = styled(Line1Text)``
const Line5Text = styled(Line1Text)``

const Branch = styled.View`
    color: ${colors.GRAY};
`
const Date = styled(Branch)``
const SequenceTitle = styled(Branch)``
const Contents = styled(Branch)``

const BranchText = styled.Text`
font-size: 15px;
`
const DateText = styled(BranchText)``
const SequenceTitleText = styled(BranchText)``
const ContentsText = styled(BranchText)``


// ---------------------------------------- TeacherList Component --------------------------------------------------
function SequencesList({branch, date, sequenceTitle, contents}) {
    return(
    <SequencesShell>
        <Line1>
            <Line1Text>지점  </Line1Text>
            <Branch><BranchText>{branch}</BranchText></Branch>
        </Line1>
        <Line2>
            <Line2Text>날짜 및 시간  </Line2Text>
            <Date><DateText>{date}</DateText></Date>
        </Line2>
        <Line3>
            <Line3Text>시퀀스 제목  </Line3Text>
            <SequenceTitle><SequenceTitleText>{sequenceTitle}</SequenceTitleText></SequenceTitle>
        </Line3>
        <Line4>
            <Line3Text>시퀀스 내용  </Line3Text>
            <Contents><ContentsText>{contents}...</ContentsText></Contents>
        </Line4>
    </SequencesShell>
    )
}
SequencesList.defaultProps = {
    branch: "branch",
    date: "date",
    sequenceTitle: "title",
    contents: "contents",
}

const Sequences = ({navigation}) => {
    
    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>시퀀스 관리</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='검색'></SearchText>
        </SearchContainer>
        <SequencesListContainer>
            <SequencesList branch={"피크오버필라테스"} date={"2022.02.27 12:00 ~ 12:50"} sequenceTitle={"최병민 님"} contents={"밸런스 + 호흡 + 하체"} />
        </SequencesListContainer>
    </Shell>
    </View>

    );
};

export default Sequences;