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
        placeholder='exercise name'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
        onChangeText={text => dispatch(addMovementName({movementId: id, name: text}))}
      />
      {
        inputFields.map(field => (
            <View key={field.id} style={styles.innerContainer}>
              <Text style={{color: '#c0eb6a'}}>Set {field.id}</Text>
              <TextInput 
                style={styles.smallInput}
                textAlign='center'
                keyboardType='numeric'
                placeholder='reps'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => dispatch(addReps({movementId: id, setNumber: field.id, reps: Number(text)}))}
              />
              <TextInput 
                style={styles.smallInput}
                textAlign='center'
                keyboardType='numeric'
                placeholder='weight'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => dispatch(addWeight({movementId: id, setNumber: field.id, weight: Number(text)}))}
              />
            </View>
        ))
      }
    <CustomButton text='+ set' fontSize={20} onPress={addInputField} />
    </View>
  )
}

const styles = StyleSheet.create({
      container: {
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#535957',
          borderBottomWidth: 1
      },
      innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
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