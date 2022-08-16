import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StatusBar,StyleSheet, ScrollView,Image } from 'react-native'
import { firebase } from '../config'
import { Restart } from '../components/reload/reload'

export default function AccountScreen({route,navigation},props) {
  const userData = props.extraData
  //const [visible, setVisible] = useState(false)
  const goDetail = () => {
    props.navigation.navigate('Detail', { userData: userData })
  }
  const signOut = () => {
    firebase.auth().signOut()
    Restart()
  }
  //const showDialog = () => {
  //  setVisible(true)
  //}
  //const handleCancel = () => {
  //  setVisible(false)
  //}
  const accountDelete = async () => {
    const collectionRef = firebase.firestore()
    await collectionRef.collection('users').doc(userData.id).delete()
    const user = firebase.auth().currentUser
    user.delete().then(function() {
      firebase.auth().signOut()
    }).catch(function(error) {
      console.log(error)
    });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View>
      <Image
        style={styles.acc}
        source={require('../assets/icon1.png')}
      />
       <Text style={styles.field}>Name:</Text>
          <Text style={styles.title}>{userData.usename}</Text>
          <Text style={styles.field}>Mail:</Text>
          <Text style={ styles.title}>{userData.email}</Text>
          <TouchableOpacity style={styles.button} onPress={goDetail}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deletebutton}>
            <Text style={styles.buttonText} on Press={accountDelete}>Account delete</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text onPress={signOut} style={styles.footerLink}>Sign out</Text>
          </View>
      </View>
      </ScrollView>
      {/*<Dialog.Container visible={visible}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={accountDelete}  />
      </Dialog.Container>*/}
    </View>
    
  );
}
const styles=StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  field: {
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  deletebutton: {
    backgroundColor: '#dc143c',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  },
})