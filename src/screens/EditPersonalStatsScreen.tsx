import React from 'react'
import EditPersonalStatsView from '../views/EditPersonalStatsView'
import { db, setDoc, doc, updateDoc, arrayUnion } from '../../firebase/firebaseConfig'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setWeight } from '../features/userSlice'
import { Weight } from '../types/types'

export default function EditPersonalStatsScreen() {
 
  const userStats = useAppSelector((state) => state.user)  
  const dispatch = useAppDispatch()

  const onChangeWeight = (weight: string) => {
    const weightObject: Weight = {
      weight: Number(weight),
      weightedOnDate: new Date().toLocaleDateString()
    }
    dispatch(setWeight(weightObject))
    addWeightToFirebase(weightObject, userStats.userId)
  }

  const addWeightToFirebase = async (weight: Weight, userId: string) => {
    const userRef = doc(db, 'User', userId)
    await updateDoc(userRef, {
      weightArray: arrayUnion(weight)
    })
  }

  return (
    <EditPersonalStatsView 
      userStats={userStats}
      onChangeWeight={onChangeWeight}
    />
  )
}