import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import { Colors } from '../Colors';

const Tab = createMaterialTopTabNavigator();

export function AuthNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.mainColor,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center"
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#ccc",
                tabBarLabelStyle: {
                    fontWeight: "500",
                    fontSize: 15
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#fff",
                    height: 3,
                    borderRadius: 2

                }
            }}>
            <Tab.Screen name="Giriş Yap" component={LoginScreen} />
            <Tab.Screen name="Kayıt Ol" component={RegisterScreen} />
        </Tab.Navigator>
    );
}