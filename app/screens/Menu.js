import React,{useState, useEffect} from "react";
import styled from "styled-components/native";
import { View, Text, } from "react-native";
import colors from '../Components/color';
import Home from "./Home";
const Shell = styled.View`
    flex: 1;
    flex-direction: row;
`
const OpacityContiner = styled.View`
/* background-color: rgba(0,0,0,0.1); */
    flex: 1;
`
const MenuContainer = styled.View`
    flex: 1 ;
    background-color: ${colors.DARKGRAY};
`
const MenuShell = styled.View`
    flex: 1;
    padding: 30px 10px;
`
const MemberName = styled.View``
const Ticket = styled.View``



const Menu = () => {

    
    return(
        <Shell style={{flex:1}}>
            <OpacityContiner>

            </OpacityContiner>
            <MenuContainer  style={{flex:1}}>
                <MenuShell>
                    <Text>가나다라</Text>
                    <Text>{Home.memberType}</Text>
                    <Text>가나다라</Text>
                </MenuShell>
            </MenuContainer>
        </Shell>
    )
}
export default Menu;