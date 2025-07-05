import { View, Text, Image, ScrollView, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { DietFoods } from '../MockData/DietFoodsMockData'
import { Colors } from '../Colors'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addToCart, removeFromCart } from '../features/Cart/CartSlice'

interface Detail {
    meals: string
}

export default function DetailScreen() {
    const navigation = useNavigation()
    const route = useRoute()
    const { id } = route?.params
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.cart)

    const selectedFoods = DietFoods.find((foods) => foods.id === id)
    const isInCart = cart.some(inCart => inCart.id === selectedFoods?.id)

    const toggleCart = () => {
        if (isInCart) {
            dispatch(removeFromCart(selectedFoods?.id))
            Alert.alert("Seçilen paket menüsü sepetinizden çıkarıldı")
        } else {
            dispatch(addToCart(selectedFoods))
            Alert.alert("Seçilen paket menüsü sepetinize eklendi")
            navigation.navigate("CartScreen")
        }
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: Colors.background
            },
            title: selectedFoods?.name,
            headerBackTitle: "Geri"
        })
    }, [])

    return (
        <ScrollView style={{
            backgroundColor: Colors.background
        }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, backgroundColor: Colors.background }}>
                <View style={{
                    width: "100%", height: "50%"
                }}>
                    <Image source={{ uri: selectedFoods?.images }} style={{ height: "100%", width: "100%" }} />
                    <TouchableOpacity style={{ height: 60, width: 60, backgroundColor: Colors.buttonColor, position: "absolute", top: 0, right: 0, borderBottomLeftRadius: 8 }} onPress={toggleCart}>
                        <Entypo name="plus" size={30} color="black" style={{ alignSelf: "center", marginTop: 13 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    marginTop: 30, marginLeft: 15, gap: 25, width: "90%",
                }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="sunny-sharp" size={16} color="black" style={{ marginTop: 3 }} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, textDecorationLine: "underline", fontStyle: "italic", marginLeft: 5 }}>Sabah:</Text>
                        </View>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Entypo name="dot-single" size={24} color="black" style={{ marginTop: 6 }} />
                            <Text style={{ marginTop: 10, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.sabah}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={{ marginTop: 3, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.sabahDetay}</Text>
                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: "row", marginLeft: 2 }}>
                            <FontAwesome name="cloud" size={13} color="black" style={{
                                marginTop: 2
                            }} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, textDecorationLine: "underline", fontStyle: "italic", marginLeft: 5 }}>Öğle:</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="dot-single" size={24} color="black" style={{ marginTop: 6 }} />
                            <Text style={{ marginTop: 10, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.öğle}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={{ marginTop: 3, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.öğleDetay}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="moon" size={16} color="black" style={{
                                marginTop: 2
                            }} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, textDecorationLine: "underline", fontStyle: "italic", marginLeft: 5 }}>Akşam:</Text>
                        </View>
                        <View style={{
                            flexDirection: "row"
                        }}>
                            <Entypo name="dot-single" size={24} color="black" style={{ marginTop: 6 }} />
                            <Text style={{ marginTop: 10, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.akşam}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="dot-single" size={24} color="black" />
                            <Text style={{ marginTop: 3, marginLeft: -2, fontSize: 14, fontWeight: 500 }}>{selectedFoods?.meals.akşamDetay}</Text>

                        </View>
                    </View>

                </View>
                {/* <TouchableOpacity style={{ borderRadius: 8, paddingVertical: 15, backgroundColor: Colors.buttonColor, paddingHorizontal: "40%", alignSelf: "center", marginTop: 40 }}>
                    <View style={{ position: "absolute", bottom: 0, }}>

                    </View>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>Sepete Ekle</Text>
                </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}