import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, Button } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import AddMovement from '../components/forms/AddMovement'

//RTK
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addMovementName, addReps, addWorkoutDate } from '../features/quickWorkoutSlice'
import CustomButton from '../components/buttons/CustomButton'

type InputField = {
    id: number
}

export default function QuickWorkoutView() {

  const dispatch = useAppDispatch()
  const quickWorkout = useAppSelector((state) => state.quickWorkout)
  const [inputFields, setInputFields] = useState<InputField[]>([{id: 1}])

  /*const [movementName, setMovementName] = useState<string>('')
  const [setNumber, setSetNumber] = useState<Number>(1)
  const [reps, setReps] = useState<Number>(0)
  const [weight, setWeight] = useState<Number>(0)

  const addMove = () => {
    const movement = {
        name: movementName,
        sets: [
            {
                setNumber: setNumber,
                reps: reps,
                weights: weight
            }
        ]
    }
    dispatch(addMovement(movement))
    console.log(quickWorkout)
  }

  const saveWorkout = () => {

  }*/
  const addInputField = () => {
    const newInputFields = [...inputFields]
    const newInputField = {id: newInputFields[newInputFields.length - 1].id +1}
    newInputFields.push(newInputField)
    setInputFields(newInputFields)
  }

  const saveWorkout = () => {
    dispatch(addWorkoutDate(new Date().toLocaleDateString()))
  }

  return (
    <View style={styles.container}>
      <MainHeading text="Quick workout" fontSize={20} />
        <ScrollView style={styles.contentContainer}>
          {inputFields.map(field => (
            <View key={field.id}>
                <AddMovement id={field.id} />
            </View>
          ))}
          <CustomButton text='+' onPress={addInputField} />
          <CustomButton text='Finish' onPress={saveWorkout} />
            {
                quickWorkout.workout.map((movement, i) => (
                    <View key={i}>
                        <Text>Date: {quickWorkout.workoutDate}</Text>
                        <Text>Movement {movement.name}</Text>
                        {movement.sets.map(set => (
                            <View key={set.setNumber}>
                                <Text>Set {set.setNumber}</Text>
                                <Text>Reps: {set.reps}</Text>
                                <Text>Weight: {set.weight}</Text>
                            </View>
                        ))}
                    </View>
                ))
            }
        </ScrollView>
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