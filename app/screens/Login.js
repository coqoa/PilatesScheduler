import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import colors from '../Components/color';
import {Ionicons} from "@expo/vector-icons"
import DropDownPicker from 'react-native-dropdown-picker';

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
    padding: 15px;
`
const TitleContainer = styled.View`
    flex: 4;
    /* border: 1px solid gray;; */
    align-items: center;
    justify-content: center;
`
const Title1 = styled.Text`
    font-size: 45px;
    font-weight: 800;
    color: ${colors.PINK};
/* border: 1px solid gray; */
`
const Title2 = styled(Title1)`
    margin-top: 10%;
`

const IdArea = styled.View`
    flex: 1;
    width: 100%;
    /* border: 1px solid black; */
    align-items: center;
    justify-content: center;
`
const IdInput = styled.TextInput`
    background-color: white;
    width: 70%;
    height: 60%;
    border: 1px solid ${colors.REALLIGHTGRAY};
    border-radius: 7px;
    padding: 0px 10px;
    font-size: 16px;
`

const PwArea = styled.View`
    flex: 1;
    width: 100%;
    /* border: 1px solid white; */
    align-items: center;
    justify-content: center;
`
const PwInput = styled(IdInput)``

const SubmitArea = styled.View`
    flex: 1;
    width: 100%;
    /* border: 1px solid blue; */
    align-items: center;
    justify-content: center;
`
const SubmitBtn = styled.TouchableOpacity`
    background-color: ${colors.PINK};
    width: 50%;
    height: 50%;
    border-radius: 8px;
    padding: 0px 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 7px 10px rgba(255, 165, 165, 0.9);
    margin-top: 10%;
    `
const SubmitBtnText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 500;
`

const SignupArea = styled.View`
    flex: 1;
    width: 100%;
    /* border: 1px solid yellow; */
    align-items: center;
    justify-content: center;
`
const SignupBtn = styled.TouchableOpacity`

`
const SignupBtnText = styled.Text`
    color: ${colors.GRAY};
    font-size: 14px;
`


const Login = ({navigation}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '관리자', value: 'manager'},
      {label: '강사', value: 'teacher'},
      {label: '수강생', value: 'student'}
    ]);

    return (
    <Shell>
        <LoginBg source={require("../assets/images/loginBG.png")} resizeMode="stretch">
        <PaddingContainer >
            <TitleContainer>
                <Title1>
                    Pilates
                </Title1>
                <Title2>
                    Scheduler
                </Title2>
            </TitleContainer>
            <IdArea>
                <IdInput placeholder="ID"></IdInput>
            </IdArea>
            <PwArea>
                <PwInput placeholder="Password"></PwInput>
            </PwArea>
            <SubmitArea>
                <SubmitBtn onPress={()=>{navigation.navigate("DrawerNavigator")}}>
                    <SubmitBtnText>Continue</SubmitBtnText>
                </SubmitBtn>
            </SubmitArea>
            <SignupArea>
                <SignupBtn>
                    <SignupBtnText onPress={() => {navigation.navigate("Signup")}}>Signup</SignupBtnText>
                </SignupBtn>
            </SignupArea>
            <DropDownPicker
                placeholder="타입을 고르세요"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{
                    // width: 200,
                    height: 40,
                    borderColor: "red"
                }}
                labelStyle={{
                    // color: "white"
                }}
                onChangeValue={(value)=>{console.log(value)}}
            />
        </PaddingContainer>
        </LoginBg>
    </Shell>
    );
};

export default Login;