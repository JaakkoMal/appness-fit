import { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StartView from './src/views/StartView'
import MainNavigator from './src/navigation/TabNavigator'

// RTK
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { useAppSelector, useAppDispatch } from './src/app/hooks'

export function App() {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn)
  const dispatch = useAppDispatch()
  
  return (
    <Provider store={store}>
    {!isLoggedIn ? 
    <StartView /> 
    :
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor={styles.container.backgroundColor}
      />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
    }
    </Provider>
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