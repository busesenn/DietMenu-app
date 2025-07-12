import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../Colors';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebaseConfig';

export default function RegisterScreen() {
    const [info, setInfo] = useState({
        email: "test@gmail.com",
        sifre: "343434",
        tekrarSifre: "343434",
        telefonNumarası: "555555555555"
    })

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const navigate = useNavigation()

    async function registerUser() {
        try {
            const auth = getAuth(app)
            const response = await createUserWithEmailAndPassword(auth, info.email, info.sifre)
            Alert.alert("Kayıt işlemi başarıyla tamamlandı.")
            navigate.navigate("Giriş Yap")
        } catch (error) {
            Alert.alert("Kayıt başarısız", error.message)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 45, backgroundColor: Colors.background }}>
            <Image source={{ uri: "https://play-lh.googleusercontent.com/7AqkqoXcI6BAd_2WZMToBXnt6am6qD1fJQmMHp0YNKwytXEi8EKpRqiuqpkPDUNhey0" }} style={{ height: 160, width: 200, alignSelf: "center", marginTop: -100 }} />
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray" }}>
                <TextInput placeholder='E-mail' style={{ marginLeft: 10, fontSize: 16 }} value={info.email} onChangeText={setInfo} autoCapitalize="none" keyboardType="email-address" />
            </View>
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "80%" }}>
                    <TextInput placeholder='Şifre' style={{ marginLeft: 10, fontSize: 16 }} secureTextEntry={!isPasswordVisible} value={info.sifre} onChangeText={setInfo} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: "80%" }}>
                    <TextInput placeholder='Tekrar Şifre' style={{ marginLeft: 10, fontSize: 16 }} secureTextEntry={!isConfirmPasswordVisible} value={info.tekrarSifre} onChangeText={setInfo} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="black" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderBottomWidth: .5, width: "90%", paddingVertical: 15, borderColor: "gray" }}>
                <TextInput placeholder='Telefon Numarası' style={{ marginLeft: 10, fontSize: 16 }} keyboardType="phone-pad"
                    value={info.telefonNumarası}
                    onChangeText={setInfo} />
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.buttonColor, width: "70%", paddingVertical: 15, borderRadius: 8, marginTop: 10, position: "absolute", bottom: 10 }} onPress={() => {
                registerUser()
            }}>
                <Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    )
}