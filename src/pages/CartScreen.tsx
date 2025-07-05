import { View, Text, Alert, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { removeFromCart } from '../features/Cart/CartSlice'
import { Colors } from '../Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import { DietFoods } from '../MockData/DietFoodsMockData'

export default function CartScreen() {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.cart)


    const toggleFavorite = (foodsId: string) => {
        dispatch(removeFromCart(foodsId))
        Alert.alert("Seçilen paket menüsü sepetinizden çıkarıldı")
    }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <SafeAreaView>
                {
                    cart.length === 0 ? (
                        <View style={{ alignItems: "center", marginTop: 200 }}>
                            <Entypo name="emoji-sad" size={50} color="gray" />
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>Sepette paket menünüz yok</Text>
                            </View>
                        </View>
                    ) : (
                        <ScrollView>
                            {cart.map((food) => (
                                <View style={{ flexDirection: "row", gap: 20, marginTop: 20, height: 320, borderBottomColor: "gray", borderBottomWidth: 1 }} key={food.id}>
                                    <View style={{ borderRadius: 10, marginLeft: 20 }}>
                                        <Image source={{ uri: food.image }} style={{ width: 200, height: 300, borderRadius: 10, }} />
                                    </View>
                                    <View style={{ position: "absolute" }}>
                                        <TouchableOpacity style={{ position: "relative", height: 35, width: 35, left: 400 }} onPress={() => toggleFavorite(food.id)}>
                                            <Entypo name="cross" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    )
                }
            </SafeAreaView>
        </View>
    )
}