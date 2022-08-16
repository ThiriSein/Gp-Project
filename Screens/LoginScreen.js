//import { useState } from 'react';
//import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
//import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
//import { db } from '../config'
//
//export default function LoginScreen({navigation}) {
//
//  const [email,setEmail] = useState("");
//  const [password,setPassword] = useState("");
//
//  function create() {
//
////    //Register User
////    setDoc(doc(db, "users", "LA"), {
////      email: email,
////      password: password,
////    }).then(() => {
////      // Data Saved Successfully!
////      console.log('user registered');
////      navigation.navigator("UploadScreen")
////
////    }).catch((error) => {
////      //The Write Failed....
////      console.log(error);
////    });
//    //new User Added
//    addDoc(collection(db, "users"), {
//      email: email,
//      password: password,
//    }).then(() => {
//      // Data Saved Successfully!
//      console.log('user registered');
//      
//
//    }).catch((error) => {
//      //The Write Failed....
//      console.log(error);
//    });
////    //Update User Added
////    updateDoc(doc(db, "users","LA"), {
////      email: email,
////      password: password,
////    }).then(() => {
////      // Data Saved Successfully!
////      console.log('user registered');
////
////    }).catch((error) => {
////      //The Write Failed....
////      console.log(error);
////    });
//    //Delate User
//    deleteDoc(doc(db,"users","LA"))
//    navigation.navigate("UploadScreen")
//  }
//  return (
//    <View style={styles.container}>
//      <Text>Firestore CRUD</Text>
//      <TextInput
//        value={email}
//        onChangeText={(email) => {setEmail(email)}}
//        placeholder='Email Address'
//        style={styles.textBoxes} >
//        
//        </TextInput>
//      <TextInput
//        value={password}
//        onChangeText={(password) => {setPassword(password)}}
//        placeholder='Password'
//        style={styles.textBoxes} >
//        
//        </TextInput>
//      <Button
//        title='Register'
//        onPress={ create }
//      /> 
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//  textBoxes: {
//    width: '90%',
//    fontSize: 18,
//    padding: 12,
//    borderColor: 'grey',
//    borderWidth: 0.2,
//    borderRadius: 10,
//    marginTop: 10,
//    marginBottom: 10
//  },
//});
