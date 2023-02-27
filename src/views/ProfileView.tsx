import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { UserState, WorkoutsState } from '../types/types'

type Props = {
  user: UserState
  workouts: WorkoutsState
}

export default function ProfileView({ user, workouts }: Props) {
  return (
    <View style={styles.container}>
      <Text>{user.userId}</Text>
      <Text>{user.email}</Text>
      <Text>{user.password}</Text>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.height}</Text>
      <Text>{user.weightArray[user.weightArray.length -1].weight}</Text>
      <Text>{user.gender}</Text>
      <Text>{user.activityLevel}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#484d4b'
  },
  contentContainer: {
    flex: 1,
    marginTop: 40,
    width: '100%',
  }
})

