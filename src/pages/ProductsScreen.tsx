import { View, Text, FlatList, Touchable, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Colors } from '../Colors'
import { DietFoods } from '../MockData/DietFoodsMockData'
import ProductCart from '../component/ProductCart'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteUser, getAuth, signOut } from "firebase/auth";


export default function ProductsScreen() {
    const navigation = useNavigation()
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState(DietFoods)


    const handleDeleteAccount = async () => {
        Alert.alert("Hesap Silme", "Hesabınızı kalıcı olarak silmek istiyor musunuz?", [
            {
                text: "Çıkış Yap",
                style: "destructive",
                onPress: async () => {
                    try {
                        const auth = getAuth();
                        const user = auth.currentUser;
                        await deleteUser(user)
                    }
                    catch (error) {
                        console.log("Hata", error.message);
                    }
                }
            },
            {
                text: "İptal",
                style: "cancel"
            }
        ])
    }

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredData(DietFoods)
        }
        else {
            const filtered = DietFoods.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            setFilteredData(filtered)
        }
    }, [search])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Aktif Paketlerimiz",
            headerStyle: {
                backgroundColor: Colors.background
            },
            headerTitleStyle: {
                fontSize: 17
            },
            headerRight: () => (
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: -5 }} onPress={() => {
                    navigation.navigate("CartScreen")
                }}>
                    <MaterialIcons name="bookmark-border" size={26} color="black" />
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => {
                    handleDeleteAccount()
                }}>
                    <MaterialIcons name="exit-to-app" size={25} color="black" />
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={{ backgroundColor: Colors.background, flex: 1 }}>
            <View style={{ flexDirection: "row", marginLeft: 8 }}>
                <TextInput style={{ width: "98%", padding: 15, fontStyle: "italic", fontSize: 15, borderWidth: .3, borderRadius: 8 }} placeholder='Paket arayın...' value={search} onChangeText={setSearch} />
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" style={{ marginLeft: -50, marginTop: 10 }} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredData}
                renderItem={({ item }) =>
                    <ProductCart item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}