import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import CustomButton from '../buttons/CustomButton'
import { UserState, Weight } from '../../types/types'
import { setHeight, setWeight, setGoalWeight, setGender, setActivityLevel } from '../../features/userSlice'
import { useAppDispatch } from '../../app/hooks'

type Props = {
    switchPage: () => void
    onSubmit: (user: UserState) => void
    user: UserState
}

export default function GoalInfoForm({switchPage, onSubmit, user}: Props) {
  const dispatch = useAppDispatch()

  const inputWeight = (input: string) => {
    const weightObject: Weight = {
      weight: Number(input),
      weightedOnDate: new Date().toLocaleDateString()
    }
    dispatch(setWeight(weightObject))
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='height'
        keyboardType='numeric'
        onChangeText={text => dispatch(setHeight(Number(text)))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='weight'
        keyboardType='numeric'
        onChangeText={text => inputWeight(text)}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='goal weight'
        keyboardType='numeric'
        onChangeText={text => dispatch(setGoalWeight(Number(text)))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='gender'
        onChangeText={text => dispatch(setGender(text))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='activity level'
        keyboardType='numeric'
        onChangeText={text => dispatch(setActivityLevel(Number(text)))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
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