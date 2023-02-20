import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AntDesign } from '@expo/vector-icons'
import StartView from '../views/StartView'
import SignUpView from '../views/SignUpView'
import { useNavigation } from '@react-navigation/native'
import { LoginStackParamList } from '../types/types'


const Stack = createNativeStackNavigator<LoginStackParamList>()

export default function HomeStack() {
  const navigation = useNavigation()  

  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Start"
            component={StartView}
            options={{
                headerTransparent: true,
                headerTitle: ''
            }}
        />
        <Stack.Screen 
            name="SignUp"
            component={SignUpView}
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