import React from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'
import CustomButton from '../buttons/CustomButton'

type Props = {
  closeModal: () => void
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onSubmit: () => void
}

export default function LoginModal({closeModal, onChangeEmail, onChangePassword, onSubmit}: Props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput 
            style={styles.input}
            onChangeText={onChangeEmail}
            keyboardType='email-address'
            placeholder='email'
            placeholderTextColor='rgba(232, 246, 222, 0.5)'
        />
        <TextInput 
            style={styles.input}
            onChangeText={onChangePassword}
            secureTextEntry={true}
            placeholder='password'
            placeholderTextColor='rgba(232, 246, 222, 0.5)'
        />
        <CustomButton text='submit' onPress={onSubmit} />
        <Button color='#c0eb6a' title='Close' onPress={closeModal} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 20
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'rgba(99, 87, 87, 0.5)',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
  },
  input: {
    backgroundColor: 'rgba(99, 87, 87, 0.5)',
    height: 40,
    width: '100%',
    margin: 12,
    padding: 10,
    borderColor: '#c0eb6a',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff'
  }
})