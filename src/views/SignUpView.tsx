import React from 'react'
import { ScrollView, StyleSheet, ImageBackground } from 'react-native'
import Constants from 'expo-constants'
import MainHeading from '../components/textcomponents/MainHeading'
import TextLabel from '../components/textcomponents/TextLabel'
import SignUpForm from '../components/forms/SignUpForm'

const image = require('../../assets/images/signup-view-image.jpg')

export default function SignUpView() {
  return (
    <ImageBackground source={image} style={styles.image} resizeMode='cover'>
      <MainHeading text='Appness Fit' fontSize={48} />
      <TextLabel text='Your partner in workout & diet' fontSize={12}/>  
        <ScrollView style={styles.container}>
            <SignUpForm />
        </ScrollView>  
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 40,
        alignItems: 'center',
    },
})

