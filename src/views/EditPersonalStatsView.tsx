import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import WeightChart from '../components/charts/WeightChart'
import { UserState, Weight } from '../types/types'
import CustomButton from '../components/buttons/CustomButton'

type Props = {
    userStats: UserState
    onChangeWeight: (weight: string) => void
}

export default function EditPersonalStatsView({ userStats, onChangeWeight }: Props) {

  const [weightInput, setWeightInput] = useState<string>('')

  const onChangeWeightInput = (input: string) => {
    setWeightInput(input)
  }

  return (
    <View style={styles.container}>
      <MainHeading text="Edit stats" fontSize={24} />
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <WeightChart data={userStats.weightArray}/>
          <TextInput 
            style={styles.input}
            value={weightInput}
            keyboardType='numeric'
            textAlign='center'
            placeholder={`Today's weight`}
            placeholderTextColor='rgba(232, 246, 222, 0.8)'
            onChangeText={onChangeWeightInput}
          />
          <CustomButton text='update' onPress={() => onChangeWeight(weightInput)}/>
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
    },
    input: {
        backgroundColor: 'rgba(99, 87, 87, 0.5)',
        height: 40,
        margin: 16,
        padding: 10,
        minWidth: 80,
        borderColor: '#c0eb6a',
        borderWidth: 1,
        fontSize: 16,
        color: '#fff'
    },
})