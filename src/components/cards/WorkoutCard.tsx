import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { QuickWorkoutState } from '../../types/types'
import TextLabel from '../textcomponents/TextLabel'

type Props = {
  workout: QuickWorkoutState
}

export default function WorkoutCard({ workout }: Props) {

  const [showDetails, setShowDetails] = useState<boolean>(false)
  const toggleDetails = () => {
    setShowDetails(prev => !prev)
  }
  
  return (
    <Pressable style={styles.container} onPress={toggleDetails}>
      <TextLabel text={workout.workoutDate} fontSize={20} />
      {showDetails &&
      <View>
      {
      workout.workout.map((workoutData, i) => (
        <View key={i}>
          <TextLabel text={workoutData.name} fontSize={18} />
          {
          workoutData.sets.map((setData, i) => (
            <TextLabel 
              key={i}
              text={(setData.reps.toString() + (setData.weight !== 0 ? ' * ' + setData.weight : '')).toString()} 
            />))
          }
        </View>
      ))
      }
      </View>
      }
    </Pressable>
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