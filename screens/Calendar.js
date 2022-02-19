import React, { useEffect, useState } from "react";
import {Text, View, TouchableOpacity, Modal, Alert, ScrollView} from "react-native"
import styled from "styled-components/native";

export const PSCalendar = () => {
    const date = new Date();
    const getFullYear = date.getFullYear();
    const getMonth = date.getMonth()+1
    const getDate = date.getDate();
    const getDay = date.getDay();
    const thisWeekMon = (getDate-getDay);
    const nextWeekMon = (getDate-getDay+7);

    const firstDate = new Date(getFullYear,getMonth-1,0+1).getDate();
    const lastDate = new Date(getFullYear,getMonth,0).getDate();

    const Shell = styled.View``
    const ViewBox = styled.TouchableOpacity`
        width: 100px;
        height: 70px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    `
    const UpperLeftViewBox = styled(ViewBox)`
    width: 40px;
    height: 40px;
    `
    const UpperViewBox = styled.View`
        width: 100px;
        height: 40px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    `
    const LeftViewBox = styled.View`
        width: 40px;
        height: 70px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    `
    
    return (
    <Shell>
        <ScrollView style={{marginTop: 150}}>
            <View style={{position:"absolute", backgroundColor:"white"}}>
                <UpperLeftViewBox><Text>/</Text></UpperLeftViewBox>
                <LeftViewBox><Text>월</Text></LeftViewBox>
                <LeftViewBox><Text>화</Text></LeftViewBox>
                <LeftViewBox><Text>수</Text></LeftViewBox>
                <LeftViewBox><Text>목</Text></LeftViewBox>
                <LeftViewBox><Text>금</Text></LeftViewBox>
                <LeftViewBox><Text>토</Text></LeftViewBox>
                <LeftViewBox><Text>일</Text></LeftViewBox>
                <LeftViewBox><Text>월</Text></LeftViewBox>
                <LeftViewBox><Text>화</Text></LeftViewBox>
                <LeftViewBox><Text>목</Text></LeftViewBox>
                <LeftViewBox><Text>금</Text></LeftViewBox>
                <LeftViewBox><Text>토</Text></LeftViewBox>
                <LeftViewBox><Text>일</Text></LeftViewBox>
                
            </View>
            <ScrollView horizontal style={{marginLeft:40}} >
                <View> 
                    <UpperViewBox><Text>00:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
                <View>
                    <UpperViewBox><Text>01:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
                <View>
                    <UpperViewBox><Text>02:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
                <View>
                    <UpperViewBox><Text>03:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
                <View>
                    <UpperViewBox><Text>04:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
                <View>
                    <UpperViewBox><Text>05:00</Text></UpperViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                    <ViewBox></ViewBox>
                </View>
            </ScrollView>
        </ScrollView>
    </Shell>
    )
};