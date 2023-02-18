import React from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'


type Props = {
    closeModal: () => void
}

export default function LoginModal({closeModal}: Props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput 
            style={styles.input}
            onChangeText={() => {}}
            placeholder='email'
        />
        <TextInput 
            style={styles.input}
            onChangeText={() => {}}
            placeholder='password'
        />
        <Button color='#c0eb6a' title='Close' onPress={closeModal} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        padding: 20
    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: 'rgba(99, 87, 87, 0.5)',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, 
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        margin: 12,
        padding: 10,
        borderColor: '#c0eb6a',
        borderWidth: 1,
        fontSize: 16
    }
})