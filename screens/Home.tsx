import react from "react";
import styled from "styled-components/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Text, View, TouchableOpacity} from "react-native"

const NativeStack = createNativeStackNavigator();

const Container = styled.View`
    flex-direction: row;
    flex: 1;
    margin-top: 70px;
    justify-content: center;
`
const MemberType = styled.View`
    flex: 1;
    align-items: center;
`
const SelectCenter = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    /* color: red; */
`
const MySchedule = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
`

const TopNav = () => (
    <Container>
        <MemberType>
            <Text>관리자입니다</Text>
        </MemberType>
        <SelectCenter>
            <Text>Center</Text>
        </SelectCenter>
        <MySchedule>
            <Text>MySchedule</Text>
        </MySchedule>
    </Container>
)
const Home = () => (
    <NativeStack.Navigator screenOptions={{headerShown:false}} >
        <NativeStack.Screen name="TopNav" component={TopNav} />
    </NativeStack.Navigator>
)
export default Home;
