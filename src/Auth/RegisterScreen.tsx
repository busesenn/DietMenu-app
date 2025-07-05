import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../Colors';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
    const [info, setInfo] = useState({
        email: "",
        şifre: "",
        tekrarŞifre: "",
        telefonNumarası: ""
    })

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigate = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 45, backgroundColor: Colors.background }}>
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
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "80%" }}>
                    <TextInput placeholder='Tekrar Şifre' style={{ marginLeft: 10, fontSize: 16 }} secureTextEntry={!isPasswordVisible} value={info.tekrarŞifre} onChangeText={setInfo} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray" }}>
                <TextInput placeholder='Telefon Numarası' style={{ marginLeft: 10, fontSize: 16 }} keyboardType="phone-pad" />
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.buttonColor, width: "70%", paddingVertical: 15, borderRadius: 8, marginTop: 10, position: "absolute", bottom: 10 }} onPress={() => {
                navigate.navigate("Giriş Yap")
            }}>
                <Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    )
}