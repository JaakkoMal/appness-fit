import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerNavParamList } from '../types/types'
import { AntDesign } from '@expo/vector-icons'
import { HomeStackParamList } from '../types/types'
import HomeScreen from '../screens/HomeScreen'
import QuickWorkoutScreen from '../screens/QuickWorkoutScreen'
import WorkoutHistoryScreen from '../screens/WorkoutHistoryScreen'
import EditPersonalStatsScreen from '../screens/EditPersonalStatsScreen'

const Stack = createNativeStackNavigator<HomeStackParamList>()
type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList>,
  DrawerScreenProps<DrawerNavParamList>
>;

export default function HomeStack({navigation}: Props) {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <AntDesign name="menuunfold" size={24} color='#c0eb6a' onPress={() => navigation.toggleDrawer()} />
          )
        }}
      />
      <Stack.Screen
        name="QuickWorkout"
        component={QuickWorkoutScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <AntDesign name="left" size={24} color='#c0eb6a' onPress={() => navigation.goBack()}/>
          )
        }}
      />
      <Stack.Screen
        name="WorkoutHistory"
        component={WorkoutHistoryScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <AntDesign name="left" size={24} color='#c0eb6a' onPress={() => navigation.goBack()}/>
          )
        }}
      />
      <Stack.Screen
        name="EditPersonalStats"
        component={EditPersonalStatsScreen}
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