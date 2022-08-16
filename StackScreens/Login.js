import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';


export default function Login({ route, navigation }) {
  
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  
  const signIn = () => {
    var emailValid = false;
        if(email.length == 0){
            setEmailError("Email is required");
        }        
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 characters");
        }      
        else if(email.indexOf(' ') >= 0){        
          setEmailError('Email cannot contain spaces');                          
      }   
        else {
            
          setEmailError("")
          emailValid = true
          navigation.navigate("Home")
        }
    var passwordValid = false;
        
        if(password.length == 0){
            setPasswordError("Password is required");
        }        
        else if(password.length < 8){
            setPasswordError("Password should be minimum 8 characters");
        }      
        else if(password.indexOf(' ') >= 0){        
            setPasswordError('Password cannot contain spaces');                          
        }    
        else {
                setPasswordError("")
                passwordValid = true
            }
            
  } 

  return (
    <SafeAreaView>

      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text>Hello</Text>
        <Text style={{fontSize:30,fontWeight: 'bold',textAlign: 'center',paddingTop: 200,paddingBottom: 10,color:'#1d89e0'}}>Login</Text>
      <View style={styles.textinput}>
        <Text style={{paddingBottom:10,fontSize:18,}}>Email Address</Text>
        <TextInput style={styles.input}
          placeholder="Email Address"
          onChangeText={text => setEmail(text)}
          value={email}
         />
      </View>

       {emailError.length > 0 &&
          <Text style={{color:"red"}}>{emailError}</Text>
      }
      <View style={styles.textinput}>
        <Text style={{paddingBottom:10,fontSize:18}}>Passoword</Text>
        <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          />
      </View>
      {passwordError.length > 0 &&
        <Text style={{color:"red"}}>{passwordError}</Text>
      }
      <View style={{paddingLeft: 120,paddingBottom: 20}}>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={{textAlign:"center",fontWeight:"bold",color:"#fff"}}>SignIn</Text>
        </TouchableOpacity>
      </View>
      <Text style={{paddingLeft: 120}}>Forget Password?</Text>
      <Text style={{ textAlign: "center", paddingTop: 10 }}>Don't Have an Account?
        <TouchableOpacity
          onPress={() => { navigation.navigate("Register") }}>
          <Text style={{ color: "#1d89e0" }}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
      flex:1,
  },
  container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
      
  },
  input: {
      padding: 10,
      backgroundColor:"#ffffff",
      borderColor: "grey",
      borderRadius: 8,
      borderWidth:1,
  },
  textinput: {
      marginTop: 10,
    marginBottom:10,  
  },
  button: {
      width: "45%",
      //marginLeft:"25%",
      padding: 10,
      backgroundColor:"#1d89e0",
      borderRadius: 10,
      marginTop: 10,
  }
});