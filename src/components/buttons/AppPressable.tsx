import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import TextLabel from '../textcomponents/TextLabel'


type Props = {
    title: string
    description: string
    Icon: () => JSX.Element
}

export default function AppPressable({title, description, Icon}: Props) {
  return (
    <Pressable 
      style={({pressed}) => [
        pressed ? styles.pressed : styles.container
      ]}>
      <TextLabel text={title} fontSize={24}/>
      <TextLabel text={description} fontSize={16} />
      <View style={{height: 12}}/>
      <Icon/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 0,
        backgroundColor: '#555c59',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    pressed: {
        flex: 1,
        padding: 12,
        paddingBottom: 0,
        backgroundColor: '#606965',
        marginBottom: 12,
    }
})