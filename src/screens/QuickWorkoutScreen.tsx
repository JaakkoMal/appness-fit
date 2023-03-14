import React, { useState } from 'react'
import { db, doc, updateDoc, arrayUnion } from '../../firebase/firebaseConfig'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addWorkout } from '../redux/features/workoutsSlice'
import { setWorkoutInitialState } from '../redux/features/quickWorkoutSlice'
import QuickWorkoutView from '../views/QuickWorkoutView'
import { InputFieldIndex, QuickWorkoutState } from '../types/types'
import { HomeStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<HomeStackParamList, 'QuickWorkout'>


export default function QuickWorkoutScreen({navigation}: Props) {

  const dispatch = useAppDispatch()
  const quickWorkout = useAppSelector((state) => state.quickWorkout)
  const userId = useAppSelector((state) => state.user.userId)
  const [inputFields, setInputFields] = useState<InputFieldIndex[]>([{id: 1}])

  const addInputField = () => {
    const newInputFields = [...inputFields]
    const newInputField = {id: newInputFields[newInputFields.length - 1].id +1}
    newInputFields.push(newInputField)
    setInputFields(newInputFields)
  }

  const saveWorkout = () => {
    dispatch(addWorkout(quickWorkout))
    addWorkoutToFirebase(quickWorkout, userId)
    dispatch(setWorkoutInitialState())
    goToHomeView()
  }

  const addWorkoutToFirebase = async (workout: QuickWorkoutState, userId: string) => {
    const workoutsRef = doc(db, "Workouts", userId);
    await updateDoc(workoutsRef, {
      workouts: arrayUnion(workout)
    });
  }

  const goToHomeView = () => {
    navigation.navigate('Home')
  }

  return (
    <QuickWorkoutView
      inputFields={inputFields}
      addInputField={addInputField}
      saveWorkout={saveWorkout}
    />
  )
}