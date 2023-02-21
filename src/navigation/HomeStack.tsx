import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/types'
import HomeView from '../views/HomeView'
import QuickWorkoutView from '../views/QuickWorkoutView'

const Stack = createNativeStackNavigator<HomeStackParamList>()

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
        <Stack.Screen
            name="QuickWorkout"
            component={QuickWorkoutView}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}