import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { Colors } from './src/Colors';
import { AppNavigation } from './src/navigation/AppNavigation';
import { AuthNavigation } from './src/navigation/AuthNavigation';
import { useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';



export default function App() {
  const [isLogin, setIsLogin] = useState(auth?.currentUser !== null)


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
      }
      else {
        setIsLogin(false)
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
          {
            isLogin ?
              (
                <AppNavigation />
              ) : (
                <AuthNavigation />
              )
          }
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
