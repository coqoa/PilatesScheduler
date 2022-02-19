import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from "expo-font";
import { Text } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import {Asset} from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Root from './navigation/Root';
import { PSCalendar } from './screens/Calendar';

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
      <Root />
    {/* //   <Tabs /> */}
    </NavigationContainer>
    // <PSCalendar />
  )
}