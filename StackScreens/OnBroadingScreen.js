import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Button, StyleSheet,TouchableOpacity, Text, View, Image } from "react-native";

//const Skip = ({...props}) => (
//    <Button
//        title="Skip"
//        color="#000000"
//    />
//);
//
//const Next = ({...props}) => (
//    <Button
//        title="Next    "
//        color="#000000"
//        {... props}
//    />
//);
//
//const Done = ({ ...props }) => (
//    <TouchableOpacity
//        style={{ marginHorizontal: 10 }}
//        {... props}
//    >
//        <Text style={{fontSize: 16}}> Done </Text>
//    </TouchableOpacity>
//);

//const Dot = ({selected}) => {
//    let backgroundColor;
//    backgroundColor =  selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
//    return (
//        <View
//            style={{
//                width: 5,
//                height: 5,
//                marginHorizontal: 3,
//
//        
//            }}
//        />
//    );
//}
const OnbroadingScreen = ({ navigation }) => {
    return (
        <Onboarding
            //SkipButtonComponent={Skip}
            //NextButtonComponent={Next}
            //DoneButtonComponent={Done}
            //DotComponent={Dot}
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}

      pages={[
        {
          backgroundColor: "lightgreen",
        //  image: <Image source={require("../assets/img1.png")} />,
          title: "Onboarding Title 1",
          subtitle: "1st Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "lightblue",
        //  image: <Image source={require("../assets/img2.jpg")} />,
          title: "Onboarding Title 2",
          subtitle: "2nd Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#ffe396",
          //  image: <Image source={require("../assets/img2.jpg")} />,
            title: "Onboarding Title 3",
            subtitle: "Type somthing ",
          },
      ]}
    />
  );
};

export default OnbroadingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});



//import React, { useEffect } from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { StyleSheet, Text, View } from 'react-native';
//import LoginScreen from './screens/LoginScreen';
//import OnbroadingScreen from './screens/OnBroadingScreen';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//
//const AppStack = createStackNavigator();
//export default function App() {
//    return (
//      <NavigationContainer>
//        <AppStack.Navigator screenOptions={{headerShown: false}}>
//          <AppStack.Screen name="Onboarding" component={OnbroadingScreen} />
//          <AppStack.Screen name="Login" component={LoginScreen} />
//        
//          </AppStack.Navigator>
//        </NavigationContainer>
//    );
//  }
//  
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: '#fff',
//      //alignItems: 'center',
//      //justifyContent: 'center',
//    },
//  });