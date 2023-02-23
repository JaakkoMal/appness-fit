import React from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import AddMovement from '../components/forms/AddMovement'
import CustomButton from '../components/buttons/CustomButton'
import { InputField } from '../types/types'

type Props = {
  inputFields: InputField[]
  addInputField: () => void
  saveWorkout: () => void
}

export default function QuickWorkoutView({
  inputFields,
  addInputField,
  saveWorkout
}: Props) {

  return (
    <View style={styles.container}>
      <MainHeading text="Quick workout" fontSize={20} />
        <ScrollView style={styles.contentContainer}>
          {inputFields.map(field => (
            <View key={field.id}>
                <AddMovement id={field.id} />
            </View>
          ))}
          <CustomButton text='+ exercise' onPress={addInputField} />
          <CustomButton text='Finish' onPress={saveWorkout} />
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