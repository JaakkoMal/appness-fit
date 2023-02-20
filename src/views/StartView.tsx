import React, { useState } from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, ImageBackground, Modal } from 'react-native'
import MainHeading from '../components/textcomponents/MainHeading'
import TextLabel from '../components/textcomponents/TextLabel'
import CustomButton from '../components/buttons/CustomButton'
import LoginModal from '../components/modals/LoginModal'
import { getUserInfo } from '../utils/firebaseFunctions/userFunctions'
//RTK
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/userSlice'
//Firebase
import { getAuth, signInWithEmailAndPassword } from '../../firebase/firebaseConfig'
//Types 
import { loginCredentials, LoginStackParamList } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<LoginStackParamList, 'Start'>

const image = require('../../assets/images/start-view-image.jpg')

export default function StartView({navigation}: Props) {

  const dispatch = useAppDispatch()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({email: '', password: ''})
  
  const closeModal = () => {
    setModalVisible(false)
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const onChangeEmail = (email: string) => {
    setLoginCredentials({...loginCredentials, email: email})
    console.log(email)
  }

  const onChangePassword = (password: string) => {
    setLoginCredentials({...loginCredentials, password: password})
    console.log(password)
  }

  const signIn = async() => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, loginCredentials.email, loginCredentials.password)
    .then((userCredentials) => {
      const user = userCredentials.user
      dispatch(login())
      console.log(user)
      getUserInfo(user.uid)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  const goToSignUpView = () => {
    navigation.navigate('SignUp')
  }

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