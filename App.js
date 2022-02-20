import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import {Asset} from 'expo-asset';
import {Ionicons} from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import Number1 from './app/screens/Number1';


const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
// const loadImages = (images) => images.map(image => {
//   if(typeof image === "string"){
//     return Image.prefetch(image)
//   }else {
//     return Asset.loadAsync(image)
//   }
// })

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () =>{
    const fonts = loadFonts([Ionicons.font])
    // const images = loadImages([require('./Local'),'url'])
    // await Promise.all(...fonts, ...images)
  }; 
  if(!ready){
    return (
    <AppLoading
      startAsync={startLoading}
      onFinish={onFinish}
      onError={console.log} />
    );
  }
  return (
    // <Number1 />
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}