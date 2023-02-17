import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'

export default function HomeView() {
  return (
    <ScrollView style={{backgroundColor: '#484d4b'}}>
        <View style={styles.container}>
            <MainHeading text="Appness Fit" />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

