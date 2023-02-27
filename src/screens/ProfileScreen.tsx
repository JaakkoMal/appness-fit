import React from 'react'
import ProfileView from '../views/ProfileView'
import { useAppSelector } from '../redux/hooks'

export default function ProfileScreen() {

  const user = useAppSelector((state) => state.user)
  const workouts = useAppSelector((state) => state.workouts)

  return (
    <ProfileView user={user} workouts={workouts}/>
  )
}