import React, { useState } from 'react'
import { db, setDoc, doc, updateDoc, arrayUnion } from '../../firebase/firebaseConfig'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addWorkout } from '../features/workoutsSlice'
import QuickWorkoutView from '../views/QuickWorkoutView'
import { InputField, QuickWorkoutState } from '../types/types'


export default function QuickWorkoutScreen() {

  const dispatch = useAppDispatch()
  const quickWorkout = useAppSelector((state) => state.quickWorkout)
  const userId = useAppSelector((state) => state.user.userId)
  const [inputFields, setInputFields] = useState<InputField[]>([{id: 1}])

  const addInputField = () => {
    const newInputFields = [...inputFields]
    const newInputField = {id: newInputFields[newInputFields.length - 1].id +1}
    newInputFields.push(newInputField)
    setInputFields(newInputFields)
  }

  const saveWorkout = () => {
    dispatch(addWorkout(quickWorkout))
    addWorkoutToFirebase(quickWorkout, userId)
  }

  const addWorkoutToFirebase = async (workout: QuickWorkoutState, userId: string) => {
    const workoutsRef = doc(db, "Workouts", userId);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(workoutsRef, {
      workouts: arrayUnion(workout)
});
  }

  return (
    <QuickWorkoutView
      inputFields={inputFields}
      addInputField={addInputField}
      saveWorkout={saveWorkout}
    />
  )
}
