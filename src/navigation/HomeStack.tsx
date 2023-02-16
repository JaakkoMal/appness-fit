import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeView from '../views/HomeView'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeView}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}