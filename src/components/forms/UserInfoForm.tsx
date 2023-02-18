import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../buttons/CustomButton'

type Props = {
    switchPage: () => void
}
export default function UserInfoForm({switchPage}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='email'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='re-enter password'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='first name'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='last name'
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