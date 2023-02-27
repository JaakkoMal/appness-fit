import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

interface Option {
  key: string
  value: string
}

type Props = {
  options: Option[],
  name: string,
  onChange: (value: string) => void
}

export default function Dropdown({options, name, onChange}: Props) {
  
  const [showOptions, setShowOptions] = useState<boolean>(false) 
  const toggleShowOptions = () => {
    setShowOptions(prev => !prev)
  }

  const [chosenOption, setChosenOption] = useState<string>(name)
  const chooseOption = (option: string) => {
    setChosenOption(option)
    onChange(option)
    setShowOptions(prev => !prev)
  }

  return (
    <View style={styles.pickerContainer}>
      {showOptions ? 
      <Pressable style={styles.openContainer} onPress={toggleShowOptions}>
        {options.map(option => (
        <Pressable key={option.key} style={styles.optionBox} onPress={() => chooseOption(option.value)}>
          <Text style={styles.text}>{option.value}</Text>
        </Pressable>
      ))}
      </Pressable>
      :
      <Pressable style={styles.container} onPress={toggleShowOptions}>
        <Text style={styles.text}>{chosenOption}</Text>
      </Pressable>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(99, 87, 87, 0.5)',
    height: 40,
    width: '100%',
    margin: 16,
    padding: 10,
    borderColor: '#c0eb6a',
    borderWidth: 1,
  },
  openContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(99, 87, 87, 0.5)',
    width: '100%',
    margin: 16,
    borderColor: '#c0eb6a',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  optionBox: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c0eb6a',
  },
  text: {
    color: 'rgba(232, 246, 222, 0.8)',
  }
})