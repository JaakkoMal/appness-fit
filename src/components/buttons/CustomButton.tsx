import { View, Text, Pressable, StyleSheet } from 'react-native'
import GeneralText from '../textcomponents/GeneralText'
import React from 'react'

type Props = {
    text: string,
    onPress?: () => void
}

export default function CustomButton({text, onPress}: Props) {
  return (
    <Pressable 
      onPress={onPress} 
      style={({pressed}) => [
        pressed ? styles.buttonPressed : styles.button
      ]}>
        <GeneralText text={text} fontSize={24}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#c0eb6a',
        backgroundColor: 'rgba(99, 87, 87, 0.5)',
        boderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        minWidth: 120
    },
    buttonPressed: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#c0eb6a',
        backgroundColor: 'rgba(99, 87, 87, 0.0)',
        boderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        minWidth: 120
    }
})