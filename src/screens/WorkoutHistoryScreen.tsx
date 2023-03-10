import React from 'react'
import WorkoutHistoryView from '../views/WorkoutHistoryView'
import { useAppSelector } from '../redux/hooks'

export default function WorkoutHistoryScreen() {

  const workoutsDoc = useAppSelector((state) => state.workouts)  

  return (
    <WorkoutHistoryView workoutsDoc={workoutsDoc}/>
  )
}