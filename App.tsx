import 'react-native-gesture-handler'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import LoginNavigator from './src/navigation/LoginNavigator'
import MainNavigator from './src/navigation/DrawerNavigator'

// RTK
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { useAppSelector, useAppDispatch } from './src/app/hooks'

export function App() {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const dispatch = useAppDispatch()

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000'
    }
  }
  
  return (
      <NavigationContainer theme={MyTheme}>
        {!isLoggedIn ? 
        <LoginNavigator /> 
        :
        <SafeAreaView style={styles.container}>
          <StatusBar 
            backgroundColor={styles.container.backgroundColor}
          />
          <MainNavigator />
        </SafeAreaView>
        }
      </NavigationContainer>
  );
}

export default function AppWrapper() {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484d4b'
  }
})