import React from "react";
import { View, Image, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={{ flex:1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: "gold"}}
      >
      
        <Image 
          source={require('../assets/logo.jpg')}
          style={{height: 50, width: 50, marginLeft: 20,marginTop: 40,  marginBottom: 10}}
        />

        <Text
          style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
          Logo Name
        </Text>
        <Text
          style={{marginLeft: 20, fontSize: 12, marginTop: 8, paddingBottom: 10}}>
          logoname@brandmail.com
        </Text>
        <View style={{flex:1, backgroundColor:"#fff", paddingTop: 10}}> 
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer