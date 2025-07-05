import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Colors } from '../Colors'
import { DietFoods } from '../MockData/DietFoodsMockData'
import ProductCart from '../component/ProductCart'
import { useNavigation } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo';


export default function ProductsScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Aktif Paketlerimiz",
            headerStyle: {
                backgroundColor: Colors.background
            },
            headerTitleStyle: {
                fontSize: 17
            }
        })
    }, [])

    return (
        <View style={{ backgroundColor: Colors.background, flex: 1 }}>
            <FlatList
                data={DietFoods}
                renderItem={({ item }) =>
                    <ProductCart item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}