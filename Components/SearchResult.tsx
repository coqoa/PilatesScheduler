import React from 'react';
import styled from 'styled-components/native';
import ModalComponent from '../Components/ModalComponent';

const Result = styled.ScrollView`
flex: 30;
border: 1px solid lightgray;
width: 350px;
margin-top: 5%;
`
const ResultList = styled.TouchableOpacity`
    margin-bottom: 10;
    height: 70px;
    width: 100%;
    border-radius: 15;

    border: 1px solid red;
`

const SearchResult = () => (
        <Result>
            <ResultList></ResultList>
            <ResultList><ModalComponent /></ResultList>
            
            
        </Result>
)
export default SearchResult;
