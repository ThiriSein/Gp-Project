import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
//import UploadScreen from './Screens/UploadScreen';
//import LoginScreen from './Screens/LoginScreen';
//import Product from './Screens/product';
//import RegisterScreen from './Screens/RegisterScreen';
//import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './StackScreens/Login';
import Register from './StackScreens/Register';
import Home from './StackScreens/Home';
import CreateProduct from './StackScreens/CreateProduct';
import UpdateProduct from './StackScreens/UpdateProduct';



export default function App() {

  //const [appIsReady, setAppIsReady] = useState(false);
  const Stack = createStackNavigator();

  return (
  
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='CreateProduct' component={CreateProduct} />
      <Stack.Screen name='UpdateProduct' component={UpdateProduct} />
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});