import React, { useState} from 'react'
import { Alert } from 'react-native'
import { createUser } from '../utils/firebaseFunctions/userFunctions'
import SignUpView from '../views/SignUpView'
import { LoginStackParamList, UserState, Weight } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<LoginStackParamList, 'SignUp'>

const initialUser: UserState = {
  userId: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  height: null,
  weightArray: [],
  goalWeight: 0,
  gender: '',
  activityLevel: null
}

export default function SignUpScreen({navigation}: Props) {
  const [user, setUser] = useState<UserState>(initialUser)
  const [verificationPassword, setVerificationPassword] = useState<string>('')
  const [showPasswordAlertColor, setShowPasswordAlertColor] = useState<boolean>(false)
  const [form, setForm] = useState<boolean>(true)  
  
  const switchPage = () => {
    setForm(prev => !prev)
  }

  const onChangeEmail = (email: string) => {
    setUser({...user, email: email})
  }

  const onChangePassword = (password: string) => {
    if (password !== verificationPassword) setShowPasswordAlertColor(true)
    setUser({...user, password: password})
  }
  const onChangePasswordVerification = (password: string) => {
    if (password === user.password) setShowPasswordAlertColor(false)
    if (password!== user.password) setShowPasswordAlertColor(true)
    setVerificationPassword(password)
  }

  const onChangeFirstName = (firstName: string) => {
    setUser({...user, firstName: firstName})
  }

  const onChangeLastName = (lastName: string) => {
    setUser({...user, lastName: lastName})
  }

  const onChangeHeight = (height: string) => {
    const heightWithCorrectDecimalPoint = Number(height.replace(',', '.'))
    setUser({...user, height: heightWithCorrectDecimalPoint})
  }

  const onChangeWeight = (weight: string) => {
    const weightWithCorrectDecimalPoint = Number(weight.replace(',', '.'))
    const weightObject: Weight = {
      weight: weightWithCorrectDecimalPoint,
      weightedOnDate: new Date().toLocaleDateString()
    }
    setUser({...user, weightArray: [...user.weightArray, weightObject]})
  }

  const onChangeGoalWeight = (goalWeight: string) => {
    const goalWeightWithCorrectDecimalPoint = Number(goalWeight.replace(',', '.'))
    setUser({...user, goalWeight: goalWeightWithCorrectDecimalPoint})
  }

  const onChangeGender = (gender: string) => {
    setUser({...user, gender: gender})
  }

  const onChangeActivityLevel = (activityLevel: string) => {
    setUser({...user, activityLevel: Number(activityLevel)})
  }

  const onSubmit = (user: UserState) => {
    if (user.password === verificationPassword) {
    createUser(user)
    navigation.navigate('Start')
    Alert.alert(`Thank you for signing up, ${user.firstName}!`)
    } else {
      Alert.alert('Passwords do not match')
    }
  }

  return (
    <SignUpView 
      user={user}
      form={form}
      switchPage={switchPage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordVerification={onChangePasswordVerification}
      showPasswordAlertColor={showPasswordAlertColor}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeHeight={onChangeHeight}
      onChangeWeight={onChangeWeight}
      onChangeGoalWeight={onChangeGoalWeight}
      onChangeGender={onChangeGender}
      onChangeActivityLevel={onChangeActivityLevel}
      onSubmit={onSubmit}
    />
  )
}
