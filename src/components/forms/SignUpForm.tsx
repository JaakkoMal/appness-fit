import React, { useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import UserInfoForm from './UserInfoForm'
import GoalInfoForm from './GoalInfoForm'

export default function SignUpForm() {
  
  const [form, setForm] = useState<boolean>(true)  

  const switchPage = () => {
    setForm(prev => !prev)
  }

  return (
    <View style={styles.container}>
      {form ?
      <UserInfoForm switchPage={switchPage} />
      :
      <GoalInfoForm switchPage={switchPage} />
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