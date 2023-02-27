import React, { useState} from 'react'
import { createUser } from '../utils/firebaseFunctions/userFunctions'
import SignUpView from '../views/SignUpView'

// RTK
import { useAppSelector, useAppDispatch } from '../redux/hooks'

import { Weight } from '../types/types'
import { 
  setEmail, 
  setPassword, 
  setFirstName, 
  setLastName, 
  setHeight, 
  setWeight, 
  setGoalWeight, 
  setGender, 
  setActivityLevel 
} from '../redux/features/userSlice'

export default function SignUpScreen() {

  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<boolean>(true)  
  
  const switchPage = () => {
    setForm(prev => !prev)
  }

  const onChangeEmail = (email: string) => {
    dispatch(setEmail(email))
  }

  const onChangePassword = (password: string) => {
    dispatch(setPassword(password))
  }

  const onChangeFirstName = (firstName: string) => {
    dispatch(setFirstName(firstName))
  }

  const onChangeLastName = (lastName: string) => {
    dispatch(setLastName(lastName))
  }

  const onChangeHeight = (height: string) => {
    const heightWithCorrectDecimalPoint = height.replace(',', '.')
    dispatch(setHeight(Number(heightWithCorrectDecimalPoint)))
  }

  const onChangeWeight = (weight: string) => {
    const weightWithCorrectDecimalPoint = weight.replace(',', '.')
    const weightObject: Weight = {
      weight: Number(weightWithCorrectDecimalPoint),
      weightedOnDate: new Date().toLocaleDateString()
    }
    dispatch(setWeight(weightObject))
  }

  const onChangeGoalWeight = (goalWeight: string) => {
    const goalWeightWithCorrectDecimalPoint = goalWeight.replace(',', '.')
    dispatch(setGoalWeight(Number(goalWeightWithCorrectDecimalPoint)))
  }

  const onChangeGender = (gender: string) => {
    dispatch(setGender(gender))
  }

  const onChangeActivityLevel = (activityLevel: string) => {
    dispatch(setActivityLevel(Number(activityLevel)))
  }

  return (
    <SignUpView 
      user={user}
      form={form}
      switchPage={switchPage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeHeight={onChangeHeight}
      onChangeWeight={onChangeWeight}
      onChangeGoalWeight={onChangeGoalWeight}
      onChangeGender={onChangeGender}
      onChangeActivityLevel={onChangeActivityLevel}
      onSubmit={createUser}
    />
  )
}
