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

const TemplatesListContainer = styled.ScrollView`
    flex: 1;
    padding: 5%;
`
const TempalateShell = styled.TouchableOpacity`
    height: 60px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.REALLIGHTGRAY};
`
const Line1 = styled.View``
const Template = styled.View`
    color: ${colors.GRAY};
`
const TemplateText = styled.Text`
    font-size: 16px;
`
// ---------------------------------------- TeacherList Component --------------------------------------------------
function TemplatesList({templateTitle}) {
    return(
    <TempalateShell>
        <Line1>
            <Template><TemplateText>{templateTitle}</TemplateText></Template>
        </Line1>
    </TempalateShell>
    )
}
TemplatesList.defaultProps = {
    templateTitle: "title",
}

const Templates = ({navigation}) => {
    
    return (
    <View style={{flex:1, backgroundColor:`${colors.bgColor}`}}>
    <Shell>
        <GoBackBtn onPress={() => navigation.goBack()}>
            <Text><Ionicons name="md-chevron-back" size={26} color= {`${colors.REALLIGHTGRAY}`} /></Text>
        </GoBackBtn>

        <TitleContainer>
            <TitleText>템플릿 관리</TitleText>
        </TitleContainer>
        <SearchContainer>
            <SearchText placeholder='검색'></SearchText>
        </SearchContainer>
        <TemplatesListContainer>
            <TemplatesList templateTitle={"밸런스+호흡+하체"} />
        </TemplatesListContainer>
    </Shell>
    </View>

    );
};

export default Templates;