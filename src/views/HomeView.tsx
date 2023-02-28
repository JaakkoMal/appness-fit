import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import AppPressable from '../components/buttons/AppPressable'
import { homeViewStrings } from '../constants/constants'
import { BarbellIcon, ClipBoardIcon, StatsIcon, HistoryIcon } from '../constants/Icons'

type Props = {
  goToQuickWorkout: () => void
  goToWorkoutHistory: () => void
  goToEditPersonalStats: () => void
}

export default function HomeView({
  goToQuickWorkout,
  goToWorkoutHistory,
  goToEditPersonalStats,
}: Props) {

  const { 
    quickWorkoutDescription, 
    workoutHistoryDescription,
    editPersonalStatsDescription, 
  } = homeViewStrings

  return (
    <View style={styles.container}>
      <MainHeading text="Appness Fit" fontSize={24} />
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <AppPressable title='Quick workout' description={quickWorkoutDescription} Icon={BarbellIcon} onPress={goToQuickWorkout}/>
          <AppPressable title='Workout history' description={workoutHistoryDescription} Icon={HistoryIcon} onPress={goToWorkoutHistory} />
          <AppPressable title='Personal stats' description={editPersonalStatsDescription} Icon={ClipBoardIcon} onPress={goToEditPersonalStats} />
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

