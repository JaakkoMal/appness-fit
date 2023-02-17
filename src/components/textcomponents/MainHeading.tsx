import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

type Props = {
    text: string
}

export default function MainHeading({text}: Props) {

  const [fontLoaded] = useFonts({
    'Dosis-Light': require('../../../assets/fonts/Dosis-Light.ttf')
  })  

  if (!fontLoaded) return null
  return (
    <View>
      <Text style={styles.heading}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Dosis-Light',
        fontSize: 36,
        color: '#c0eb6a'
    }
})