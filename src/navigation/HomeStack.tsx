import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeStackParamList } from '../types/types'
import HomeScreen from '../screens/HomeScreen'
import QuickWorkoutScreen from '../screens/QuickWorkoutScreen'
import WorkoutHistoryScreen from '../screens/WorkoutHistoryScreen'

const Stack = createNativeStackNavigator<HomeStackParamList>()

export default function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="QuickWorkout"
            component={QuickWorkoutScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="WorkoutHistory"
            component={WorkoutHistoryScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}