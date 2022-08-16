import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import DrawerHome from '../DrawerScreens/DrawerHome';
import Products from '../DrawerScreens/Products';
import MyCart from '../DrawerScreens/MyCart';
import OrderDetail from '../DrawerScreens/OrderDetail';
import Account from '../DrawerScreens/Account';
import AboutUs from '../DrawerScreens/AboutUs';
import Logout from '../DrawerScreens/Logout';
import Register from '../DrawerScreens/RegisterScreen';
import Admin from '../DrawerScreens/Admin';
import CustomDrawer from '../DrawerScreens/CustomDrawer';


const Drawer = createDrawerNavigator();

export default function Home(navigation) {
  return (
    <Drawer.Navigator initialRouteName="DrawerHome"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "black",
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }} >
      <Drawer.Screen
        name="DrawerHome"
        component={DrawerHome}
        options={{
         
          title: 'Home',
          drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="MyCart"
        component={MyCart}
        options={{
          title: 'MyCart',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{
          title: 'OrderDetail',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list-outline" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'AboutUs',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" color={'#ffd700'} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Logout',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={'#ffd700'} size={30} />
          )
        }}
      />

      <Drawer.Screen
        name="Admin"
        component={Admin}
        options={{
          title: 'Admin',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-switch" color={'violet'} size={30} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
