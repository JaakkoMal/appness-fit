import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Weight } from '../../types/types'
import TextLabel from '../textcomponents/TextLabel'


type Props = {
    data: Weight
    closeModal: () => void
}

export default function ChartDataModal({ data, closeModal }: Props) {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextLabel text={data.weightedOnDate} fontSize={20}/>
        <TextLabel text={data.weight.toString()} fontSize={20} />
        <Button color='#c0eb6a' title='Close' onPress={closeModal} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(72, 77, 75, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: '#484d4b',
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
})