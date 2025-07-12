import { View, Text, Alert, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { removeFromCart } from '../features/Cart/CartSlice'
import { Colors } from '../Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import { DietFoods } from '../MockData/DietFoodsMockData'
import { useNavigation } from '@react-navigation/native'

export default function CartScreen() {
    const navigation = useNavigation()
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state) => state.cart.cart)

    const toggleFavorite = (foodsId: string) => {
        dispatch(removeFromCart(foodsId))
        Alert.alert("Seçilen paket menüsü sepetinizden çıkarıldı")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: Colors.background
            },
            title: "Sepetim",
            backTitleVisible: "default",
            headerBackTitle: "Geri"
        })
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <SafeAreaView>
                {
                    cart.length === 0 ? (
                        <View style={{ alignItems: "center", marginTop: 200 }}>
                            <Entypo name="emoji-sad" size={50} color="gray" />
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}>Sepette paket menünüz yok.</Text>
                            </View>
                        </View>
                    ) : (
                        <ScrollView>
                            {cart.map((food) => (
                                <View style={{ flexDirection: "row", marginTop: 10, height: 220 }} key={food.id}>
                                    <View style={{ borderRadius: 10, flexDirection: "row", width: "100%", borderBottomWidth: .2 }}>
                                        <Image source={{ uri: food.images }} style={{ width: 180, height: 200, borderRadius: 10, alignSelf: "center", marginLeft: 5, marginTop: -8 }} />
                                        <View style={{ width: "50%", marginLeft: 5, marginTop: 10, gap: 10 }}>
                                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{food.name}</Text>
                                            <Text style={{ fontSize: 14 }}>{food.type}</Text>
                                            <Text style={{ fontSize: 14 }}>{food.açıklama}</Text>
                                            <View style={{ position: "absolute", bottom: 40 }}>
                                                <Text style={{ fontSize: 15, textDecorationLine: "underline" }}>{food.fiyat}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ position: "absolute" }}>
                                        <TouchableOpacity style={{ position: "relative", height: 35, width: 35, left: 400 }} onPress={() => toggleFavorite(food.id)}>
                                            <Entypo name="cross" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                            <TouchableOpacity style={{ marginTop: 20, padding: 15, backgroundColor: Colors.buttonColor, width: "98%", marginLeft: 5, borderRadius: 10 }}>
                                <View style={{ marginTop: 10 }}>
                                    <Text>Toplam Sepet Tutarı:</Text>
                                </View>
                                <View>
                                    <Text></Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    )
                }
            </SafeAreaView>
        </View>
    )
}