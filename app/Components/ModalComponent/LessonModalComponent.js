import React, { useState } from 'react';
import styled from "styled-components/native";
import colors from '../color';
import {Ionicons} from "@expo/vector-icons"
import Modal from "react-native-modal";

// ---------------------모달관련-----------------
const AddBtn = styled.Pressable`
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid ${colors.LIGHTGRAY};
`
const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius:15px;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1000;
`
const ModalTitle = styled.View`
    height: 70px;
    width: 100%;
    align-items: center;
    justify-content: center;
    `
const ModalTitleText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${colors.REALDARKGRAY};
`
const ModalSubmitBtnShell = styled.View`
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const ModalSubmitBtn = styled.Pressable`
    width: 145px;
    height: 35px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.TOMATO};
`
const ModalSubmitBtnText = styled.Text`
    color: white;
    font-size: 17px;
    font-weight: bold;
`

const ModalContents = styled.View`
    flex: 1;
    width: 100%;
    border: 1px solid black;
    
`
const Line1 = styled.View`
    width: 100px;
    height: 30px;
    flex-direction: row;
    margin:5px 15px;
    align-items: center;
`
const Line2 = styled(Line1)``
const Line3 = styled(Line1)``
const Line4 = styled(Line1)``
const Line5 = styled(Line1)``
const Line6 = styled(Line1)``
const Line7 = styled(Line1)``
const Line8 = styled(Line1)``
const Line9 = styled(Line1)``

const Line1Text = styled.Text`
    font-size: 16px;
    color: ${colors.DARKGRAY};
`
const Line2Text = styled(Line1Text)``
const Line3Text = styled(Line1Text)``
const Line4Text = styled(Line1Text)``
const Line5Text = styled(Line1Text)``
const Line6Text = styled(Line1Text)``
const Line7Text = styled(Line1Text)``
const Line8Text = styled(Line1Text)``
const Line9Text = styled(Line1Text)``

const LessonModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
        <AddBtn onPress={()=>setModalVisible(true)}>
            <Ionicons name="add" size={26} color= {`${colors.LIGHTGRAY}`} />
        </AddBtn>
        <Modal 
        isVisible={modalVisible}
        onBackdropPress = {() => setModalVisible(false)}
        >
            <ModalContainer>
                <CloseBtn onPress={()=>setModalVisible(false)}>
                    <Ionicons name="close" size={26} color= {`${colors.LIGHTGRAY}`} />
                </CloseBtn>
                <ModalTitle onPress={()=>setModalVisible(false)}>
                    <ModalTitleText>타이틀</ModalTitleText>
                </ModalTitle>
                <ModalContents>
                    <Line1>
                        <Line1Text>Type</Line1Text>
                        {/* 작업중 */}
                    </Line1>
                    <Line2>
                        <Line2Text>담당 강사</Line2Text>
                    </Line2>
                    <Line3>
                        <Line3Text>수업 이름</Line3Text>
                    </Line3>
                    <Line4>
                        <Line4Text>수업 내용</Line4Text>
                    </Line4>
                    <Line5>
                        <Line5Text>수업 날짜</Line5Text>
                    </Line5>
                    <Line6>
                        <Line6Text>수업 시간</Line6Text>
                    </Line6>
                    <Line7>
                        <Line7Text>예약 마감</Line7Text>
                    </Line7>
                    <Line8>
                        <Line8Text>참여 인원</Line8Text>
                    </Line8>
                    <Line9>
                        <Line9Text>클래스 룸</Line9Text>
                    </Line9>
                </ModalContents>
                <ModalSubmitBtnShell>
                    <ModalSubmitBtn>
                        <ModalSubmitBtnText>버튼이름</ModalSubmitBtnText>
                    </ModalSubmitBtn>
                </ModalSubmitBtnShell>
            </ModalContainer>
        </Modal>
        </>
    )
}
export default LessonModalComponent;