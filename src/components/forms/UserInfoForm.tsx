import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../buttons/CustomButton'
import { UserState } from '../../types/types'

type Props = {
  switchPage: () => void
  user: UserState
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onChangePasswordVerification: (password: string) => void
  showPasswordAlertColor: boolean
  onChangeFirstName: (firstName: string) => void
  onChangeLastName: (lastName: string) => void
}
export default function UserInfoForm({
  switchPage,
  user,
  onChangeEmail,
  onChangePassword,
  onChangePasswordVerification,
  showPasswordAlertColor,
  onChangeFirstName,
  onChangeLastName
}: Props) {
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={user.email}
        placeholder='email'
        keyboardType='email-address'
        onChangeText={onChangeEmail}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        value={user.password}
        placeholder='password'
        secureTextEntry={true}
        onChangeText={onChangePassword}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={[styles.input, showPasswordAlertColor && {borderColor: 'red'}]}
        placeholder='re-enter password'
        secureTextEntry={true}
        onChangeText={onChangePasswordVerification}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        value={user.firstName}
        placeholder='first name'
        onChangeText={onChangeFirstName}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        value={user.lastName}
        placeholder='last name'
        onChangeText={onChangeLastName}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <CustomButton text='NEXT' onPress={switchPage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 20
  },
  input: {
    backgroundColor: 'rgba(99, 87, 87, 0.5)',
    height: 40,
    width: '100%',
    margin: 16,
    padding: 10,
    borderColor: '#c0eb6a',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff'
  }
})