import { StyleSheet, Text, View, Button, Alert, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Admin from "../DrawerScreens/Admin";
//image picker import
import * as ImagePicker from "expo-image-picker";

const CreateProduct = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dataRef = firebase.firestore().collection("data");

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const [imgRef, setImgRef] = useState("");

  //image
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    //No permission request is needed to upload photo
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const source = { uri: result.uri };
    console.log(source);
    setImage(source);
  };

  //Add image and product data
  const add = async () => {
    setUploading(true);
    const response = await fetch(image.uri);
    const blob = await response.blob();
    const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    Alert.alert("Photo uploaded..!!");
    setImage(null);

    if (
   
      (name && name.length > 0) ||
      (desc && desc.length > 0) ||
      (price && price.length > 0) ||
      (qty && qty.length > 0) ||
      (category && category.length > 0)
    ) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      const data = {

        name: name,
        desc: desc,
        price: price,
        qty: qty,
        category: category,
        createdAt: timestamp,
      };
      dataRef
        .add(data)
        .then(() => {
          setName("");
          setDesc("");
          setPrice("");
          setQty("");
          setCategory("");
        })
        .then(() => {
          Alert.alert("Successfully added!");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>CreateProduct</Text>

      <TouchableOpacity style={[styles.selectButton, styles.ImgBot]} onPress={pickImage}>
        <Text> Pick an Image</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 150, height: 150 }}
          />
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(text) => setDesc(text)}
        value={desc}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        onChangeText={(text) => setPrice(text)}
        value={price}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        onChangeText={(text) => setQty(text)}
        value={qty}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Category"
        onChangeText={(text) => setCategory(text)}
        value={category}
      />

      <View style={styles.btn}>

      <TouchableOpacity style={styles.selectButton} onPress={add}>
        <Text> Create </Text>
        </TouchableOpacity>
        
        {/*<Button title="Create" onPress={add}  />*/}
      </View>

      <View style={styles.btn}>
      <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate("Admin")}>
        <Text> Back </Text>
        </TouchableOpacity>
        {/*<Button title="Back" onPress={() => navigation.navigate("Admin")} />*/}
      </View>
      </View>
      </ScrollView>
  );
};

export default CreateProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  btn: {
    width: "100%",
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: {
    marginTop: 10,
    marginLeft: "30%",
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: "lightgray",
    width: 150,
    height: 150,
  },
  selectButton: {
    backgroundColor: 'gold',
    marginLeft: 15,
    padding: 4,
    borderRadius: 5,
  },
  ImgBot: {
    width: "30%",
  }
});
