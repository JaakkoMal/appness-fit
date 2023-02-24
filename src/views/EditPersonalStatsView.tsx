import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'

export default function EditPersonalStatsView() {
  return (
    <View style={styles.container}>
      <MainHeading text="Edit stats" fontSize={24} />
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          
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