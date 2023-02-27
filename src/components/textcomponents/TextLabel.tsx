import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

type Props = {
  text: string,
  fontSize?: number
}

export default function TextLabel({text, fontSize}: Props) {

  const [fontLoaded] = useFonts({
    'Dosis-Light': require('../../../assets/fonts/Dosis-Light.ttf')
  })    

  if (!fontLoaded) return null

  return (
    <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Dosis-Light',
    fontSize: 16,
    color: '#c0eb6a'
  }
})

