import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '../config'
import { FlatList } from 'react-native-gesture-handler';
import UpdateProduct from '../StackScreens/UpdateProduct';

const Admin = ({ route, navigation }) => {

    const [data, setData] = useState([]);
    const dataRef = firebase.firestore().collection('data')

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [category, setCategory] = useState('');


    useEffect(() => {
        read();
    }, [])

    // read data
    const read = () => {
        dataRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const data = []
                    querySnapshot.forEach((doc) => {
                        const { name } = doc.data()
                        const { desc } = doc.data()
                        const { price } = doc.data()
                        const { qty } = doc.data()
                        const {category} = doc.data()

                        data.push({
                            id: doc.id,
                            name,
                            desc,
                            price,
                            qty,
                            category,
                        })
                    })
                    setData(data)
                }
            )
    }

    // delete data
    const destroy = (data) => {
        dataRef
            .doc(data.id)
            .delete()
            .then(() => {
                alert('Deleted Successfully!')
            })
            .catch((error) => {
                alert('error')
            })
    }


    return (
        <View>
            <Text>Admin</Text>

            
            <Button
                title='Add Product'
                onPress={() => navigation.navigate('CreateProduct')}
            />


            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>Name: {item.name}</Text>
                        <Text>Description: {item.desc}</Text>
                        <Text>$ {item.price}</Text>
                        <Text>Quantity: {item.qty}</Text> 
                        <Text>Category: {item.category}</Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('UpdateProduct', {item})}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button1}
                            onPress={() => destroy(item)}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}

            />

        </View>
    )
}

export default Admin

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 10,
    },
    
    button1: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
    }
})