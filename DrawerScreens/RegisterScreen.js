import { Image,StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { firebase } from '../config'
import React,{ useState } from 'react';
export default function RegisterScreen( { route,navigation }) {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setName] = useState("");
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
const onFooterLinkPress = () => {
  navigation.navigate('Login')
  }
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }

    firebase
    .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          username,
          password,
        };
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Products')
          })
          .catch((error) => {
            alert(error)
            Alert.alert("Your email has not sign in yet!")
          });
       
      })
      .catch((error) => {
        alert(error)
      });
    //navigation.navigate('Products')
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:28,fontWeight:"bold"}}>Sign Up</Text>
      <Image
        style={styles.acc}
        source={require('../assets/icon1.png')}
      />
      <TextInput
        value={username}
        onChangeText={(text) => setName(text)}
        placeholder='Enter Your Name'
        style={styles.textBoxes} >
        
        </TextInput>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email Address'
        autoCapitalize="none"
        keyboardType={'email-address'}
        style={styles.textBoxes}
      >
        
        </TextInput>
      <TextInput
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        style={styles.textBoxes} >
        
      </TextInput>
      <TextInput
          
          secureTextEntry
          placeholder='Confirm Password'
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.textBoxes}
        />
    <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}>
          <Text style={styles.buttonTitle}>Agree and Create account</Text>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:16}}>Already got an account? <Text onPress={onFooterLinkPress} style={ {color:"#ffd700",fontSize:20}}>Log in</Text></Text>
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
  button: {
    backgroundColor: '#ffd700',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
});
