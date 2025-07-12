import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function FirstPage() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={{ uri: "https://i.pinimg.com/1200x/df/f8/57/dff8579bd67ea949afc4c68441fb0f7e.jpg" }} style={{ flex: 1 }} resizeMode='cover'>
            <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(255,255,255, .4)" }}>
                <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                    <Text style={{ color: "#283618", fontSize: 23, fontWeight: "bold", fontStyle: "italic" }}>Sağlıklı Beslenmenin Kolay Yolu!</Text>
                    <View style={{ marginTop: 70 }}>
                        <Text style={{ marginLeft: 10, fontSize: 17, color: "#333333" }}>FitLab,günlük hayatın temposuna ayak uydururken sağlıklı beslenmek isteyenler için geliştirildi. Diyetisyen onaylı menülerle, sabah – öğle – akşam öğünlerinden oluşan hazır yemek paketlerini sana her gün eksiksiz ulaştırıyoruz.</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ marginLeft: 10, fontSize: 17, color: "#2c2c2c" }}>Hem lezzetli hem pratik menülerimizi sizlere aylık olarak sunuyoruz. </Text>
                    </View>

                    <TouchableOpacity style={{ marginTop: 160, paddingVertical: 10, paddingHorizontal: 40, borderRadius: 10, width: "90%", borderWidth: .5 }} onPress={() => {
                        navigation.navigate("AuthNavigation", { screen: "LoginScreen" })
                    }}>
                        <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
                            <Text style={{ fontSize: 18, color: "#333" }}>Kayıt Ol</Text>
                            <AntDesign name="arrowright" size={23} color="#333" style={{ marginBottom: 2 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground >
    )
}