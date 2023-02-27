import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { WorkoutsState } from '../types/types'
import WorkoutCard from '../components/cards/WorkoutCard'
import MainHeading from '../components/textcomponents/MainHeading'

type Props = {
    workoutsDoc: WorkoutsState
}

export default function WorkoutHistoryView({ workoutsDoc }: Props) {
  return (
    <View style={styles.container}>
      <MainHeading text='Workout history' fontSize={24}/>  
      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {
        workoutsDoc.map((workout, i) => (
          <WorkoutCard key={i} workout={workout}/>
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
  },
})