import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button,Image } from 'react-native';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import {firebase} from '../config'
import React,{ useState } from 'react';
export default function DrawerHome( {navigation }) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  function register() {
    navigation.navigate('Register')
  }
//  function create() {
//    addDoc(collection(db, "users"), {
//      username:username,
//      email: email,
//      password: password,
//
//    }).then(() => {
//      // Data Saved Successfully!
//      console.log('user registered');
//
//
//    }).catch((error) => {
//      //The Write Failed....
//      console.log(error);
//    });
//    deleteDoc(doc(db,"users","LA"))
//    navigation.navigate("UploadScreen")
//  }
  const onLoginPress = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const uid = response.user.uid
      const usersRef = firebase.firestore().collection('users')
      usersRef
        .doc(uid)
        .get()
        .then(firestoreDocument => {
          if (!firestoreDocument.exists) {
            alert("User does not exist anymore.")
            return;
          }
        })
        .catch(error => {
          setSpinner(false)
          alert(error)
        });
        navigation.navigate('Products')
    })
    .catch(error => {
      setSpinner(false)
      alert(error)
    })
   
  }
  return (
    <View style={styles.container}>
     
     <Text style={{fontSize:28,fontWeight:"bold"}}>LOG IN</Text>
      <Image
        style={styles.acc}
        source={require('../assets/icon1.png')}
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email Address'
        style={styles.textBoxes}
        keyboardType={'email-address'}/>
   
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        style={styles.textBoxes}
       secureTextEntry/>
        
       
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Log in</Text>
        </TouchableOpacity>
        <View style={{flex:1,marginTop:20}}>
        <Text style={{ fontSize: 16 }}>Don't have an account? <Text style={{color:"#ffd700",fontSize:20}} onPress={register}>Sign up</Text></Text>
        </View>
          
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'grey',
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  acc: {
 
    height: 80,
    width: 80,
    alignSelf: "center",
    margin: 30,
    borderRadius: 20
  },
  button: {
    backgroundColor: '#ffd700',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    padding:15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: "bold"
  },
});
