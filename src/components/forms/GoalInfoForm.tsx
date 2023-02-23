import React from 'react'
import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../buttons/CustomButton'
import Dropdown from '../dropdown/Dropdown'
import { genderOptions, activityLevelOptions } from '../../constants/constants'
import { UserState } from '../../types/types'

type Props = {
    switchPage: () => void
    onSubmit: (user: UserState) => void
    user: UserState
    onChangeHeight: (height: string) => void
    onChangeWeight: (weight: string) => void
    onChangeGoalWeight: (goalWeight: string) => void
    onChangeGender: (gender: string) => void
    onChangeActivityLevel: (activityLevel: string) => void
}

export default function GoalInfoForm({
  switchPage, 
  onSubmit, 
  user,
  onChangeHeight,
  onChangeWeight,
  onChangeGoalWeight,
  onChangeGender,
  onChangeActivityLevel
}: Props) {


return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='height'
      keyboardType='numeric'
      onChangeText={onChangeHeight}
      placeholderTextColor='rgba(232, 246, 222, 0.8)'
    />
    <TextInput
      style={styles.input}
      placeholder='weight'
      keyboardType='numeric'
      onChangeText={onChangeWeight}
      placeholderTextColor='rgba(232, 246, 222, 0.8)'
    />
    <TextInput
      style={styles.input}
      placeholder='goal weight'
      keyboardType='numeric'
      onChangeText={onChangeGoalWeight}
      placeholderTextColor='rgba(232, 246, 222, 0.8)'
    />
    <Dropdown name='gender' options={genderOptions} onChange={onChangeGender}/>
    <Dropdown name='activityLevel' options={activityLevelOptions} onChange={onChangeActivityLevel}/>
    <CustomButton text='BACK' onPress={switchPage} />
    <CustomButton text='Create' onPress={() => onSubmit(user)} />
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