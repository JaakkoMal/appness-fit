import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../buttons/CustomButton'
import { UserState } from '../../types/types'
import { setEmail, setPassword, setFirstName, setLastName } from '../../features/userSlice'
import { useAppDispatch } from '../../app/hooks'

type Props = {
    switchPage: () => void
    user: UserState
}
export default function UserInfoForm({switchPage, user}: Props) {
  const dispatch = useAppDispatch() // Check if this could be imported from SignUpForm

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='email'
        keyboardType='email-address'
        onChangeText={text => dispatch(setEmail(text))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='password'
        secureTextEntry={true}
        onChangeText={text => dispatch(setPassword(text))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='re-enter password'
        secureTextEntry={true}
        onChangeText={() => {}}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='first name'
        onChangeText={text => dispatch(setFirstName(text))}
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
      />
      <TextInput
        style={styles.input}
        placeholder='last name'
        onChangeText={text => dispatch(setLastName(text))}
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