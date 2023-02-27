import { View, Text, Pressable, StyleSheet } from 'react-native'
import TextLabel from '../textcomponents/TextLabel'
import React from 'react'

type Props = {
  text: string,
  onPress: () => void
  color?: string
  fontSize?: number
}

export default function CustomButton({text, onPress, color, fontSize}: Props) {
  return (
    <Pressable 
      onPress={onPress} 
      style={color ? 
        ({pressed}) => 
          [ pressed ? styles.buttonPressed : ([styles.button, {backgroundColor: color}]) ]
      : 
        ({pressed}) => 
          [ pressed ? styles.buttonPressed : styles.button ]
      }
      >
        <TextLabel text={text} fontSize={fontSize ? fontSize : 24}/>
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
    marginBottom: 16,
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