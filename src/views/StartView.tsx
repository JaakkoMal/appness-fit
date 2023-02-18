import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, ImageBackground } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import GeneralText from '../components/textcomponents/GeneralText'
import CustomButton from '../components/buttons/CustomButton'

//RTK
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/loginSlice'

const image = require('../../assets/images/start-view-image.jpg')

export default function StartView() {
  const dispatch = useAppDispatch()
  
  const logIn = () => {
    dispatch(login())
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode='cover'>
        <MainHeading text='Appness Fit' fontSize={48} />
        <GeneralText text='Your partner in workout & diet' fontSize={12}/>
        <View style={{flex: 3}}></View>
        <View style={styles.buttonContainer}>
            <CustomButton text='Login' onPress={logIn}/>
            <CustomButton text='Sign Up' />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 40,
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 30
    }
})