import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"
import { View } from "react-native";

const Shell = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`
const LoginBg = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
`
const PaddingContainer = styled.View`
    flex: 1;
    /* padding: 0px 10px; */
`
const TitleContainer = styled.View`
    flex: 1;
    /* border: 1px solid gray;; */
    align-items: center;
    justify-content: center;
    margin: 15px;
`
const Title = styled.Text`
    font-size: 45px;
    font-weight: 800;
    color: ${colors.PASTELBLUE};

`
const TypeArea = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
`
const IdArea = styled(TypeArea)``
const PwArea = styled(TypeArea)``
const PwCheckArea = styled(TypeArea)``
const NameArea = styled(TypeArea)``
const NumberArea = styled(TypeArea)``
const EmailArea = styled(TypeArea)``
const SubmitArea = styled(TypeArea)``
const SignupArea = styled(TypeArea)``



const IdInput = styled.TextInput`
    background-color: white;
    width: 70%;
    height: 60%;
    border: 1px solid ${colors.REALLIGHTGRAY};
    border-radius: 7px;
    padding: 0px 10px;
    font-size: 14px;
`
const PwInput = styled(IdInput)``
const PwCheckInput = styled(IdInput)``
const NameInput = styled(IdInput)``
const NumberInput = styled(IdInput)``
const EmailInput = styled(IdInput)``

const SelectType = styled(IdInput)``


const SubmitBtn = styled.TouchableOpacity`
    background-color: ${colors.PASTELBLUE};
    width: 50%;
    height: 60%;
    border-radius: 8px;
    padding: 0px 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 7px 10px rgba(152, 183, 245, 1);
    margin-top: 20px;
    `
const SubmitBtnText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 500;
`
const SignupBtn = styled.TouchableOpacity`

`
const SignupBtnText = styled.Text`
    color: ${colors.GRAY};
    font-size: 14px;
`


const Signup = ({navigation}) => {
    return (
    <Shell>
    <LoginBg source={require("../assets/images/signupBG.png")} resizeMode="stretch">
        <PaddingContainer>
            <TitleContainer>
                <Title>
                    Sign up
                </Title>
            </TitleContainer>
            <TypeArea>
                <SelectType  placeholder="Type"></SelectType>
            </TypeArea>
            <IdArea>
                <IdInput placeholder="please input your ID"></IdInput>
            </IdArea>
            <PwArea>
                <PwInput placeholder="Password"></PwInput>
            </PwArea>
            <PwCheckArea>
                <PwCheckInput placeholder="Check Password"></PwCheckInput>
            </PwCheckArea>
            <NameArea>
                <NameInput  placeholder="Name"></NameInput>
            </NameArea>
            <NumberArea>
                <NumberInput placeholder="Number"></NumberInput>
            </NumberArea>
            <EmailArea>
                <EmailInput placeholder="E-mail"></EmailInput>
            </EmailArea>
            <SubmitArea>
                <SubmitBtn>
                    <SubmitBtnText>Sign up</SubmitBtnText>
                </SubmitBtn>
            </SubmitArea>
            <SignupArea>
                <SignupBtn>
                    <SignupBtnText onPress={() => {navigation.navigate("Login")}}>log in</SignupBtnText>
                </SignupBtn>
            </SignupArea>
        </PaddingContainer>
    </LoginBg>
    </Shell>
    );
};

export default Signup;