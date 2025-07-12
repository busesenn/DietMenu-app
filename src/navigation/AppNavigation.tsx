import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from '../pages/ProductsScreen';
import DetailScreen from '../pages/DetailScreen';
import CartScreen from '../pages/CartScreen';
import { AuthNavigation } from './AuthNavigation';
import FirstPage from '../pages/FirstPage';

const Stack = createNativeStackNavigator();



export function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
                headerShown: true
            }} />
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} options={{
                headerShown: false
            }} />
            <Stack.Screen name="FirstPage" component={FirstPage} />
        </Stack.Navigator>
    );
}