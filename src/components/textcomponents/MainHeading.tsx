import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

type Props = {
  text: string
  fontSize?: number
}

export default function MainHeading({text, fontSize}: Props) {

  const [fontLoaded] = useFonts({
    'Dosis-Light': require('../../../assets/fonts/Dosis-Light.ttf')
  })  

  if (!fontLoaded) return null
  return (
    <Text style={[styles.heading, {fontSize: fontSize}]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Dosis-Light',
    fontSize: 36,
    color: '#c0eb6a'
  }
})