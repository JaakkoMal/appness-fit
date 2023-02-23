import React from 'react'
import { ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { UserState } from '../types/types'
import Constants from 'expo-constants'
import MainHeading from '../components/textcomponents/MainHeading'
import TextLabel from '../components/textcomponents/TextLabel'
import SignUpForm from '../components/forms/SignUpForm'

const image = require('../../assets/images/signup-view-image.jpg')

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

export default function SignUpView({
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
    <ImageBackground source={image} style={styles.image} resizeMode='cover'>
      <MainHeading text='Appness Fit' fontSize={48} />
      <TextLabel text='Your partner in workout & diet' fontSize={12}/>  
        <ScrollView style={styles.container}>
            <SignUpForm 
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
              onSubmit={onSubmit}
            />
        </ScrollView>  
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 40,
        alignItems: 'center',
    },
})

