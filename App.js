import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import {Asset} from 'expo-asset';
import {Ionicons} from "@expo/vector-icons"
import DrawerNavigator from './app/navigation/DrawerNavigator';
import Navigator from './app/navigation/navigator';



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
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Navigator />
      </SafeAreaView>
    </NavigationContainer>
  )
}