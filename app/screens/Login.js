import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import { View, Text, } from "react-native";
import colors from '../Components/color';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons"

const Shell = styled.View``
const LoginBg = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
`
const Title = styled.Text`
    flex: 5;
    width: 100%;
    border: 1px solid gray;
`

const IdArea = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid black;
`
const IdLabel = styled.Text``
const IdInput = styled.TextInput``

const PwArea = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid white;
`
const PwLabel = styled.Text``
const PwInput = styled.TextInput``

const SubmitArea = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid blue;
`
const SubmitBtn = styled.TouchableOpacity``
const SubmitBtnText = styled.Text``

const SignupArea = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid yellow;
`
const SignupBtn = styled.TouchableOpacity``
const SignupBtnText = styled.Text``


const Login = () => {

    return (
    <Shell style={{flex:1}}>
        <LoginBg source={require("../assets/images/loginBG.png")} resizeMode="stretch">
        <Title>
            타이틀
        </Title>
        <IdArea>
            <IdLabel>ID라벨</IdLabel>
            <IdInput>ID인풋</IdInput>
        </IdArea>
        <PwArea>
            <PwLabel>PW라벨</PwLabel>
            <PwInput>PW인풋</PwInput>
        </PwArea>
        <SubmitArea>
            <SubmitBtn>
                <SubmitBtnText>섭밋버튼텍스트</SubmitBtnText>
            </SubmitBtn>
        </SubmitArea>
        <SignupArea>
            <SignupBtn>
                <SignupBtnText>사인업버튼텍스트</SignupBtnText>
            </SignupBtn>
        </SignupArea>
        </LoginBg>
    </Shell>
    );
};

export default Login;