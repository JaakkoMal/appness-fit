import React from 'react'
import WorkoutHistoryView from '../views/WorkoutHistoryView'
import { useAppSelector } from '../redux/hooks'

export default function WorkoutHistoryScreen() {

  const workouts = useAppSelector((state) => state.workouts)  

  return (
    <WorkoutHistoryView workouts={workouts}/>
  )
}