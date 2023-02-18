import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import CustomButton from '../buttons/CustomButton'


type Props = {
    switchPage: () => void
}

export default function GoalInfoForm({switchPage}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='height'
        keyboardType='numeric'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='weight'
        keyboardType='numeric'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='gender'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='goal weight'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='activity level'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <CustomButton text='BACK' onPress={switchPage} />
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