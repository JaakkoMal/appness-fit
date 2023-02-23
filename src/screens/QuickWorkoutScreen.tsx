import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addWorkoutDate } from '../features/quickWorkoutSlice'
import { addWorkout } from '../features/workoutsSlice'
import QuickWorkoutView from '../views/QuickWorkoutView'
import { InputField } from '../types/types'


export default function QuickWorkoutScreen() {

  const dispatch = useAppDispatch()
  const quickWorkout = useAppSelector((state) => state.quickWorkout)
  const [inputFields, setInputFields] = useState<InputField[]>([{id: 1}])

  const addInputField = () => {
    const newInputFields = [...inputFields]
    const newInputField = {id: newInputFields[newInputFields.length - 1].id +1}
    newInputFields.push(newInputField)
    setInputFields(newInputFields)
  }

  const saveWorkout = () => {
    dispatch(addWorkout(quickWorkout))
  }

  return (
    <QuickWorkoutView
      inputFields={inputFields}
      addInputField={addInputField}
      saveWorkout={saveWorkout}
    />
  )
}
