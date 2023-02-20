import React, { useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { createUser } from '../../utils/firebaseFunctions/userFunctions'
import UserInfoForm from './UserInfoForm'
import GoalInfoForm from './GoalInfoForm'

// RTK
import { useAppSelector, useAppDispatch } from '../../app/hooks'


export default function SignUpForm() {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<boolean>(true)  

  const switchPage = () => {
    setForm(prev => !prev)
  }

  return (
    <View style={styles.container}>
      {form ?
      <UserInfoForm switchPage={switchPage} user={user} />
      :
      <GoalInfoForm switchPage={switchPage} user={user} onSubmit={createUser}/>
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