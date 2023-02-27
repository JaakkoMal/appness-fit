import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, ImageBackground, Modal } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import TextLabel from '../components/textcomponents/TextLabel'
import CustomButton from '../components/buttons/CustomButton'
import LoginModal from '../components/modals/LoginModal'

const image = require('../../assets/images/start-view-image.jpg')

type Props = {
  modalVisible: boolean
  closeModal: () => void
  openModal: () => void
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  signIn: () => void
  goToSignUpView: () => void
  
}

export default function StartView({
  modalVisible,
  closeModal,
  openModal,
  onChangeEmail,
  onChangePassword,
  signIn,
  goToSignUpView
}: Props) {

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode='cover'>
        <MainHeading text='Appness Fit' fontSize={48} />
        <TextLabel text='Your partner in workout & diet' fontSize={12}/>
        <View style={{flex: 3}}></View>
        <View style={styles.buttonContainer}>
            <CustomButton text='Login' onPress={openModal}/>
            <CustomButton text='Sign Up' onPress={goToSignUpView} />
        </View>
        <Modal
          visible={modalVisible}
          onRequestClose={closeModal}
          transparent={true}
        >
          <LoginModal 
            closeModal={closeModal} 
            onChangeEmail={onChangeEmail} 
            onChangePassword={onChangePassword}
            onSubmit={signIn}
          />
        </Modal>
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