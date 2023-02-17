import { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StartView from './src/views/StartView'
import MainNavigator from './src/navigation/TabNavigator'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  if (!isLoggedIn) return (
      <StartView />
  )
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
    backgroundColor: '#484d4b'
  }
})