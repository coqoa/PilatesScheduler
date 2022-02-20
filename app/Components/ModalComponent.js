import React from 'react';
import {Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';

const Modals = styled.Modal`
  `
const ModalContainer = styled.View`
height: 100%;
width: 100%;
background-color: rgba(0,0,0,0.1);
align-items: center;
justify-content: center;
`
const ModalContent = styled.View`
  width: 95%;
  height: 90%;
  background-color: rgba(255,255,255,1);
  padding: 20px 20px;
  border-radius: 20;
  /* align-items: center;
  justify-content: center; */

`
const ModalBtn = styled.TouchableOpacity`

`

const ModalComponent = ({name}) => {
  
  const [visible, setVisible] = useState(false);
  const changeVisible = () => setVisible(!visible)

  return(
    <View>
      <Modals
      animationType='slide'
      transparent={true}
      visible={visible}
      >
        <ModalContainer>
          <ModalContent>
          <ModalBtn onPress={()=>{changeVisible()}}><Text>X</Text></ModalBtn>
            <Text>안녕하세요 저는{name}입니다</Text>
          </ModalContent>
        </ModalContainer>
      </Modals>

      <ModalBtn onPress={()=>{
        changeVisible()
      }}>
        <Text>ModalBtn</Text>
      </ModalBtn>
    </View>
  )
}

ModalComponent.defaultProps = {
  name:"이름",
  visible:false
}
export default ModalComponent;