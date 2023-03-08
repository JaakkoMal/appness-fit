import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../buttons/CustomButton'
import { TrashCanIcon } from '../../constants/Icons'
import { Set } from '../../types/types'

type Props = {
  movementId: number
  addSetsToExercise: (movementId: number, name: string, set: Set[]) => void
}

export default function AddMovement({movementId, addSetsToExercise}: Props) {
  const [inputsEnabled, setInputsEnabled] = useState<boolean>(true)
  const [exerciseName, setExerciseName] = useState<string>('')
  const [sets, setSets] = useState<Set[]>([
    {
      setNumber: 1,
      reps: 0,
      weight: 0
    }
  ]
  )

  const addEmptySetInputFields = () => {
    const newSets = [...sets]
    const newSetInput = {setNumber: newSets[newSets.length - 1].setNumber +1, reps: 0, weight: 0}
    newSets.push(newSetInput)
    setSets(newSets)
    console.log(newSets)
  }

  const removeSet = (setNumber: number) => {
    if (setNumber > 1){
      const newSets = [...sets]
      const setIndex = newSets.findIndex(i => i.setNumber === setNumber)
      if (setIndex !== -1) {
        newSets.splice(setIndex, 1)
        let count = 1
        newSets.forEach(set => {
          set.setNumber = count
          count += 1
        })
        setSets(newSets)
      }
    }
  }

  const onChangeExerciseName = (name: string) => {
    setExerciseName(name)
  }

  const onChangeReps = (setNumber: number, reps: number) => {
    const newSets = [...sets]
    const setIndex = newSets.findIndex(i => i.setNumber === setNumber)
    if (setIndex!== -1) {
      newSets[setIndex].reps = reps
      setSets(newSets)
    }
  }

  const onChangeWeight = (setNumber: number, weight: number) => {
    const newSets = [...sets]
    const setIndex = newSets.findIndex(i => i.setNumber === setNumber)
    if (setIndex!== -1) {
      newSets[setIndex].weight = weight
      setSets(newSets)
    }
  }

  const saveSets = () => {
    addSetsToExercise(movementId, exerciseName, sets)
    setInputsEnabled(false)
  }

  return (
    <View style={styles.container}>  
      <TextInput 
        style={[styles.input, !inputsEnabled && {color: '#c0eb6a'}]}
        textAlign='center'
        value={exerciseName}
        editable={inputsEnabled}
        placeholder='exercise name'
        placeholderTextColor='rgba(232, 246, 222, 0.8)'
        onChangeText={text => onChangeExerciseName(text)}
      />
      {
      sets.map(set => (
        <View key={set.setNumber} style={styles.innerContainer}>
          <View>
            <Text style={{color: '#c0eb6a'}}>Set {set.setNumber}</Text>
              <TextInput 
                style={[styles.smallInput, !inputsEnabled && {color: '#c0eb6a'}]}
                textAlign='center'
                keyboardType='number-pad'
                editable={inputsEnabled}
                placeholder='reps'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => onChangeReps(set.setNumber, Number(text))}
              />
              <TextInput 
                style={[styles.smallInput, !inputsEnabled && {color: '#c0eb6a'}]}
                textAlign='center'
                keyboardType='numeric'
                editable={inputsEnabled}
                placeholder='weight'
                placeholderTextColor='rgba(232, 246, 222, 0.8)'
                onChangeText={text => onChangeWeight(set.setNumber, Number(text))}
              />
              </View>
              {
              (set.setNumber > 1 && inputsEnabled)&& 
              <Pressable onPress={() => removeSet(set.setNumber)}>
                <TrashCanIcon />
              </Pressable>
              }
          </View>
        ))
      }
    {inputsEnabled &&
    <CustomButton text='+ set' fontSize={20} onPress={addEmptySetInputFields} />
    }  
    <CustomButton text={inputsEnabled ? 'set done' : 'edit'} fontSize={18} onPress={inputsEnabled ? saveSets : () => setInputsEnabled(true)} />
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
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    minWidth: 80,
    borderColor: '#c0eb6a',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff'
  }
})