import React from 'react'
import { homeViewStrings } from '../constants/constants'
import { HomeStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeView from '../views/HomeView'
type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>

export default function HomeScreen({navigation}: Props) {

  const { 
    quickWorkoutDescription, 
    chooseAWorkoutDescription, 
    newWorkoutDescription, 
    myProgressDescription,
    workoutHistoryDescription 
  } = homeViewStrings

  const goToQuickWorkout = () => {
    navigation.navigate('QuickWorkout')
  }

  const goToWorkoutHistory = () => {
    navigation.navigate('WorkoutHistory')
  }

  return (
    <HomeView 
      goToQuickWorkout={goToQuickWorkout}
      goToWorkoutHistory={goToWorkoutHistory}
      quickWorkoutDescription={quickWorkoutDescription}
      chooseAWorkoutDescription={chooseAWorkoutDescription}
      newWorkoutDescription={newWorkoutDescription}
      myProgressDescription={myProgressDescription}
      workoutHistoryDescription={workoutHistoryDescription}
    />
  )
}
