import { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import LoginView from './src/views/LoginView'
import MainNavigator from './src/navigation/TabNavigator'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  if (!isLoggedIn) return <LoginView />
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor={styles.container.backgroundColor}
      />
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42564f'
  }
})