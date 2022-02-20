import React from 'react';
import {View, Text } from "react-native";
import styled from 'styled-components/native';
import SearchResult from '../Components/SearchResult';


const SearchWindow = styled.TextInput`
flex: 1;
width: 350px;
border: 1px solid lightgray;
padding: 10px;
margin-top: 50px;
border-radius: 10;

`


const Search = () => (

    <View style={{flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "white"}}>
        <SearchWindow>🔍</SearchWindow>
        <SearchResult />


    </View>

)
export default Search;
