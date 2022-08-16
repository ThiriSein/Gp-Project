import React, {useState ,useEffect} from 'react'
import { Text, View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';


export default function Register( {navigation}) {
    const [email, setEmail] = useState("")
    const [fullname, setFullName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const [emailError, setEmailError] = useState("")
    const [nameError, setFullNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmpasswordError, setConfirmPasswordError] = useState("")
    
    
    const validEmailRegex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
    const signUp = async () => {

        var nameValid = false;
        if(fullname.length == 0){
            setFullNameError("Enter Full Name");
        }        
        else {
                setFullNameError("")
            nameValid = true
            navigation.navigate("Home")
            }
            

        var emailValid = false;
        if(email.length == 0){
            setEmailError("Email is required");
        }        
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 characters");
        }      
        else if (emailValid == validEmailRegex.test(String(email).toLocaleLowerCase())) { 
            
            setEmailError("Enter a Validate Email. (eg.example@gmail.com)"); 
        }    
        else {
            
                setEmailError("")
                emailValid = true
            }

        var phoneValid = false;
        if(phone.length == 0){
            setPhoneError("Enter a phone number.");
        }        
        else if (phone.length > 10 || phone.length < 10) {
            setPhoneError("Enter Only 10 Digit Number.");
          }
        else {
                setPhoneError("")
                phoneValid = true
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

        console.log(confirmpassword)
        console.log(password)

        var confirmpasswordValid = false;
        if (confirmpassword.length == 0) {
            setConfirmPasswordError("Enter Password Confirmation.");
        }
       
        
        else if (confirmpassword !== password) {
           
        setConfirmPasswordError("Password and Confrim password should be the same!")
        }
       
        else {
                setConfirmPasswordError ("")
                confirmpasswordValid = true
            }
    }
    
    return (
        <ScrollView>
            <View style={styles.form}>
        <View style={styles.container}>
            <Text style={{textAlign:"center",fontSize:30,color:"#000",fontWeight:"bold",paddingBottom:40}}>Registration Form</Text>
            <View>
            <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Full Name</Text>
                        <TextInput style={styles.input}
                            placeholder="Full Name"
                            onChangeText={text => setFullName(text)}
                            value={fullname}
                        />
                </View>

                {nameError.length > 0 &&
                  <Text style={{color:"red"}}>{nameError}</Text>
                }
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Email Address</Text>
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
                    <Text style={{paddingBottom:10,fontSize:18}}>Phone(enter only 10 digit number)</Text>
                        <TextInput style={styles.input}
                            placeholder="Phone Number"
                            keyboardType="numeric"
                            onChangeText={text => setPhone(text)}
                            value={phone}
                        />
                </View>
                {phoneError.length > 0 &&
            
                    <Text style={{color:"red"}}>{phoneError}</Text>
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
                <View style={styles.textinput}>
                    <Text style={{paddingBottom:10,fontSize:18}}>Confirm Passoword</Text>
                    <TextInput style={styles.input}
                      placeholder="Confirm Password"
                      secureTextEntry={true}
                      onChangeText={text => setConfirmPassword(text)}
                      value={confirmpassword}
                    />
                </View>
                {confirmpasswordError.length > 0 &&
            
                  <Text style={{color:"red"}}>{confirmpasswordError}</Text>
                }
                {/*<View style={styles.button}><Button onPress={handleSubmit} title='Register' /></View>*/}
                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={{textAlign:"center",fontWeight:"bold",color:"#fff"}}>SignUp</Text>
                </TouchableOpacity>
                
</View>
            
            </View>
            </View>
        </ScrollView>
    )
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
        backgroundColor:"#0000ff",
        borderRadius: 10,
      marginTop: 10,
    }
  });