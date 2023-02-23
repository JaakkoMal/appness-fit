import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import AppPressable from '../components/buttons/AppPressable'
import { BarbellIcon, ClipBoardIcon, StatsIcon } from '../constants/Icons'

type Props = {
  goToQuickWorkout: () => void
  quickWorkoutDescription: string
  chooseAWorkoutDescription: string
  newWorkoutDescription: string
  myProgressDescription: string
}

export default function HomeView({
  goToQuickWorkout,
  quickWorkoutDescription,
  chooseAWorkoutDescription,
  newWorkoutDescription,
  myProgressDescription
}: Props) {

  return (
    <View style={styles.container}>
      <MainHeading text="Appness Fit" fontSize={20} />
        <ScrollView style={styles.contentContainer}>
          <AppPressable title='Quick workout' description={quickWorkoutDescription} Icon={BarbellIcon} onPress={goToQuickWorkout}/>
          <AppPressable title='Choose a workout' description={chooseAWorkoutDescription} Icon={BarbellIcon} onPress={() => {}}/>
          <AppPressable title='New workout' description={newWorkoutDescription} Icon={ClipBoardIcon} onPress={() => {}}/>
          <AppPressable title='My Progress' description={myProgressDescription} Icon={StatsIcon} onPress={() => {}}/>
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

