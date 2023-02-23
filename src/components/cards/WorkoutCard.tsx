import { View, StyleSheet } from 'react-native'
import React from 'react'
import { QuickWorkoutState } from '../../types/types'
import TextLabel from '../textcomponents/TextLabel'

type Props = {
    workout: QuickWorkoutState
}

export default function WorkoutCard({ workout }: Props) {
  return (
    <View style={styles.container}>
      <TextLabel text={workout.workoutDate} fontSize={20} />
      {
        workout.workout.map((workoutData, i) => (
            <View key={i}>
              <TextLabel text={workoutData.name} fontSize={18} />
              {
                workoutData.sets.map(setData => (
                    <TextLabel text={(setData.reps.toString() + (setData.weight !== 0 ? ' * ' + setData.weight : '')).toString()} />
                ))
              }
            </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#555c59',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
})