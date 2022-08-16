import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import { firebase } from '../config'
import Admin from '../DrawerScreens/Admin';

const UpdateProduct = ({ route, navigation }) => {

    const [data, setData] = useState([]);
    const dataRef = firebase.firestore().collection('data')

    const [name, setName] = useState(route.params.item.name);
    const [desc, setDesc] = useState(route.params.item.desc);
    const [price, setPrice] = useState(route.params.item.price);
    const [qty, setQty] = useState(route.params.item.qty);
    const [category, setCategory] = useState(route.params.item.category);
    
    const update = () => {
        if (name && name.length > 0 || desc && desc.length > 0 || price && price.length > 0 || qty && qty.length > 0) {
            dataRef
                .doc(route.params.item.id)
                .update({
                    name: name,
                    desc: desc,
                    price: price,
                    qty: qty,
                    category: category,
                }).then(() => {
                    navigation.navigate('Admin')
                    Alert.alert('Updated Successfully!')
                }).catch((error) => {
                    alert(error.message)
                })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CreateProduct</Text>

            <TextInput
                style={styles.input}
                placeholder='Name'
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder='Description'
                onChangeText={(text) => setDesc(text)}
                value={desc}
            />

            <TextInput
                style={styles.input}
                placeholder='Price'
                onChangeText={(text) => setPrice(text)}
                value={price}
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                placeholder='Quantity'
                onChangeText={(text) => setQty(text)}
                value={qty}
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                placeholder='Category'
                onChangeText={(text) => setQty(text)}
                value={category}
            />

            <View style={styles.btn}>
                <Button
                    title='Update'
                    onPress={() => update()}
                />
            </View>

            <View style={styles.btn}>
                <Button
                    title='Back'
                    onPress={() => navigation.navigate('Admin')}

                />
            </View>

        </View>
    )
}

export default UpdateProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    btn: {
        width: '100%',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})