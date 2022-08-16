//import { useState } from 'react';
//import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Pressable } from 'react-native';
//import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
//import { db } from '../config'
//import UploadScreen from './UploadScreen';
//
//export default function Product() {
//
//  const [category, setCategory] = useState("");
//
//  const [name, setName] = useState("");
//  
//  const [price, setPrice] = useState("");
//
//  const [size, setSize] = useState("");
//
//
//  function productCreate() {
//
//    //Register User
//    setDoc(doc(db, "products", "LA"), {
//      category: category,
//      name: name,
//      price: price,
//      size: size,
//    }).then(() => {
//      // Data Saved Successfully!
//      console.log('Product Created...');
//
//    }).catch((error) => {
//      //The Write Failed....
//      console.log(error);
//    });
//  }
//
//  function productAdd() {
//        //new User Added
//    addDoc(collection(db, "products"), {
//      category: category,
//      name: name,
//      price: price,
//      size: size,
//    }).then(() => {
//      // Data Saved Successfully!
//      console.log('user registered');
//
//    }).catch((error) => {
//      //The Write Failed....
//      console.log(error);
//    });
//  }
//
//  function productUpdate() {
//    //Update User Added
//    updateDoc(doc(db, "products","LA"), {
//      category: category,
//      name: name,
//      price: price,
//      size: size,
//    }).then(() => {
//      // Data Saved Successfully!
//      console.log('user registered');
//
//    }).catch((error) => {
//      //The Write Failed....
//      console.log(error);
//    });
//  }
//
//  function productDelete() {
//    deleteDoc(doc(db,"products","LA"))
//  }
//
//    
////    //Delate User
////    deleteDoc(doc(db,"users","LA"))
//    
//  
//  return (
//    <View style={styles.container}>
//      <Text style={{fontSize: 30}}>Products</Text>
//      {/*<View>*/}
//          <TextInput
//              value={category}
//              onChangeText={category => {setCategory(category)}}
//              placeholder='Category Name'
//              style={styles.textBoxes} >
//          </TextInput>
//          <TextInput
//            value={name}
//            onChangeText={(name) => {setName(name)}}
//            placeholder='Product Name'
//            style={styles.textBoxes} >
//          </TextInput>
//          <TextInput
//              value={size}
//              onChangeText={(size) => {setSize(size)}}
//              placeholder='Product Size'
//              style={styles.textBoxes} >
//          </TextInput>
//          <TextInput
//            value={price}
//            onChangeText={(price) => {setPrice(price)}}
//            placeholder='Product Price'
//            style={styles.textBoxes} >
//          </TextInput>
//      {/*</View>*/}
//      <Pressable
//        onPress={productCreate}
//        style={{ borderRadius: 10 ,padding: 10,backgroundColor: 'violet' ,marginBottom: 10}}> 
//        <Text style={{fontSize: 16 }}>Create Product</Text>
//      </Pressable>
//      <Pressable
//        onPress={productAdd}
//        style={{ borderRadius: 10 ,padding: 10,backgroundColor: 'violet' ,marginBottom: 10 }}> 
//        <Text style={{fontSize: 16}}>Add New Product</Text>
//      </Pressable>
//      <Pressable
//        onPress={productUpdate}
//        style={{ borderRadius: 10 ,padding: 10,backgroundColor: 'violet' ,marginBottom: 10 }}> 
//        <Text style={{fontSize: 16}}>Update Product</Text>
//      </Pressable>
//      <Pressable
//        onPress={productDelete}
//        style={{ borderRadius: 10 ,padding: 10,backgroundColor: 'violet' ,marginBottom: 10 }}> 
//        <Text style={{fontSize: 16}}>Delete Product</Text>
//      </Pressable>
//      <View>
//        <UploadScreen />
//      </View>
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
