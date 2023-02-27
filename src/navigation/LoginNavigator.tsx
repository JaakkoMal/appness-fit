import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons'
import StartScreen from '../screens/StartScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { useNavigation } from '@react-navigation/native'
import { LoginStackParamList } from '../types/types'


const Stack = createNativeStackNavigator<LoginStackParamList>()

export default function HomeStack() {
  const navigation = useNavigation()  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          headerTransparent: true,
          headerTitle: ''
        }}
      />
      <Stack.Screen 
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <AntDesign name="left" size={24} color='#c0eb6a' onPress={() => navigation.goBack()}/>
          )
        }}
      />
    </Stack.Navigator>
  )
}