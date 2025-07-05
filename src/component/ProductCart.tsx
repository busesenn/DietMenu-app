import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export interface Diet {
    id: number,
    name: string,
    type: string,
    meals: string,
    kalori: number,
    fiyat: string,
    açıklama: string,
    images: string
}

export default function ProductCart({ item }: { item: Diet }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ width: "95%", height: 160, borderRadius: 10, alignSelf: "center", backgroundColor: "#C3A38A", marginTop: 15 }} onPress={() => {
            navigation.navigate("DetailScreen", { id: item.id })
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image source={{ uri: item.images }} style={{ height: 160, width: 180, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                <View style={{
                    marginTop: 10, marginLeft: 5, width: "50%", gap: 10
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 5, textDecorationLine: "underline" }}>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name="check" size={15} color="black" style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 14, marginLeft: 1.5, fontWeight: 500 }}>{item.type}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name="check" size={15} color="black" style={{ marginTop: 2 }} />
                        <Text style={{ fontSize: 14, marginLeft: 1.5, fontWeight: 500 }}>{item.açıklama}</Text>
                    </View>
                    <Text style={{ fontSize: 18, marginTop: 5, position: "absolute", right: 0, bottom: 10 }}>{item.fiyat}</Text>

                </View>
            </View>
        </TouchableOpacity >
    )
}