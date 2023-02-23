import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../buttons/CustomButton'
import { InputField } from '../../types/types'

// RTK
import { useAppDispatch } from '../../app/hooks'
import { addMovementName, addReps, addWeight, addSet } from '../../features/quickWorkoutSlice'

type Props = {
    id: number
}


export default function AddMovement({id}: Props) {

  const [inputFields, setInputFields] = useState<InputField[]>([{id: 1}])  
  const dispatch = useAppDispatch()

  const addInputField = () => {
    const newInputFields = [...inputFields]
    const newInputField = {id: newInputFields[newInputFields.length - 1].id +1}
    newInputFields.push(newInputField)
    setInputFields(newInputFields)
    dispatch(addSet({movementId: id, setNumber: newInputFields[newInputFields.length - 1].id}))
  }

  return (
    <View style={styles.container}>  
      <TextInput 
        style={styles.input}
        textAlign='center'
        placeholder='movement name'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
        onChangeText={text => dispatch(addMovementName({movementId: id, name: text}))}
      />
      {
        inputFields.map(field => (
            <View key={field.id} style={styles.container}>
              <Text style={{color: '#c0eb6a'}}>Set {field.id}</Text>
              <TextInput 
                style={styles.smallInput}
                textAlign='center'
                placeholder='reps'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => dispatch(addReps({movementId: id, setNumber: field.id, reps: Number(text)}))}
              />
              <TextInput 
                style={styles.smallInput}
                textAlign='center'
                placeholder='weight'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => dispatch(addWeight({movementId: id, setNumber: field.id, weight: Number(text)}))}
              />
            </View>
        ))
      }
    <CustomButton text='+ set' onPress={addInputField} />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
      },
      input: {
          backgroundColor: 'rgba(99, 87, 87, 0.5)',
          height: 40,
          margin: 16,
          padding: 10,
          minWidth: 150,
          borderColor: '#c0eb6a',
          borderWidth: 1,
          fontSize: 16,
          color: '#fff'
      },
      smallInput: {
          backgroundColor: 'rgba(99, 87, 87, 0.5)',
          height: 40,
          margin: 10,
          padding: 10,
          minWidth: 80,
          borderColor: '#c0eb6a',
          borderWidth: 1,
          fontSize: 16,
          color: '#fff'
      }
})