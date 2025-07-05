import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
    const [info, setInfo] = useState({
        email: "",
        şifre: "",
        tekrarŞifre: "",
        telefonNumarası: ""
    })

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigate = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 45, backgroundColor: Colors.background, marginTop: -150 }}>
            <Image source={{ uri: "https://play-lh.googleusercontent.com/7AqkqoXcI6BAd_2WZMToBXnt6am6qD1fJQmMHp0YNKwytXEi8EKpRqiuqpkPDUNhey0" }} style={{ height: 160, width: 200 }} />
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray" }}>
                <TextInput placeholder='E-mail' style={{ marginLeft: 10, fontSize: 16 }} value={info.email} onChangeText={setInfo} autoCapitalize="none" keyboardType="email-address" />
            </View>
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "80%" }}>
                    <TextInput placeholder='Şifre' style={{ marginLeft: 10, fontSize: 16 }} secureTextEntry={!isPasswordVisible} value={info.şifre} onChangeText={setInfo} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={{ color: "red", fontStyle: "italic", textDecorationLine: "underline" }}>Şifremi unuttum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: Colors.buttonColor, width: "70%", paddingVertical: 15, borderRadius: 8, marginTop: 10, position: "absolute", bottom: 10 }}>
                <Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    )
}