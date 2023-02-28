import React from 'react'
import { HomeStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeView from '../views/HomeView'
type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

export default function HomeScreen({navigation}: Props) {


  const goToQuickWorkout = () => {
    navigation.navigate('QuickWorkout')
  }

  const goToWorkoutHistory = () => {
    navigation.navigate('WorkoutHistory')
  }

  const goToEditPersonalStats = () => {
    navigation.navigate('EditPersonalStats')
  }

  return (
    <HomeView 
      goToQuickWorkout={goToQuickWorkout}
      goToWorkoutHistory={goToWorkoutHistory}
      goToEditPersonalStats={goToEditPersonalStats}
    />
  )
}
