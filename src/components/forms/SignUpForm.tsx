import React from 'react'
import { View, StyleSheet } from 'react-native'
import { UserState } from '../../types/types'
import UserInfoForm from './UserInfoForm'
import GoalInfoForm from './GoalInfoForm'

type Props = {
  user: UserState
  form: boolean
  switchPage: () => void
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onChangeFirstName: (firstName: string) => void
  onChangeLastName: (lastName: string) => void
  onChangeHeight: (height: string) => void
  onChangeWeight: (weight: string) => void
  onChangeGoalWeight: (goalWeight: string) => void
  onChangeGender: (gender: string) => void
  onChangeActivityLevel: (activityLevel: string) => void
  onSubmit: (user: UserState) => void
}


export default function SignUpForm({
  user,
  form,
  switchPage,
  onChangeEmail,
  onChangePassword,
  onChangeFirstName,
  onChangeLastName,
  onChangeHeight,
  onChangeWeight,
  onChangeGoalWeight,
  onChangeGender,
  onChangeActivityLevel,
  onSubmit
}: Props) { 

  return (
    <View style={styles.container}>
      {form ?
      <UserInfoForm 
        switchPage={switchPage} 
        user={user}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
      />
      :
      <GoalInfoForm 
        switchPage={switchPage} 
        user={user} 
        onSubmit={onSubmit} 
        onChangeHeight={onChangeHeight}
        onChangeWeight={onChangeWeight}
        onChangeGoalWeight={onChangeGoalWeight}
        onChangeGender={onChangeGender}
        onChangeActivityLevel={onChangeActivityLevel}
      />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})