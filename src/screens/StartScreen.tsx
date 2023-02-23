import React, { useState } from 'react'
import StartView from '../views/StartView'
//RTK
import { useAppDispatch } from '../app/hooks'
import { login } from '../features/loginSlice'
import { setUser } from '../features/userSlice'
//Firebase
import { getAuth, signInWithEmailAndPassword, db, doc, getDoc  } from '../../firebase/firebaseConfig'
//Types 
import { LoginCredentials, LoginStackParamList, UserState } from '../types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<LoginStackParamList, 'Start'>

export default function StartScreen({navigation}: Props) {

  const dispatch = useAppDispatch()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({email: '', password: ''})
  
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
      getUserInfo(user.uid)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  const getUserInfo = async (userId: string) => {
    const userDocRef = doc(db, 'User', userId)
    const docSnap = await getDoc(userDocRef)

    if (docSnap.exists()) {
        //dispatch(setUserId(docSnap.data().userId))
        const user: UserState = {
          userId: docSnap.data().userId, 
          email: docSnap.data().email,
          password: docSnap.data().password,
          firstName: docSnap.data().firstName,
          lastName: docSnap.data().lastName,
          height: docSnap.data().height,
          weightArray: docSnap.data().weightArray,
          goalWeight: docSnap.data().goalWeight,
          gender: docSnap.data().gender,
          activityLevel: docSnap.data().activityLevel
        }
        dispatch(setUser(user))
        console.log("SNAP: ", docSnap.data().weightArray)
    } else {
        console.log('No such document')
    }
}

  const goToSignUpView = () => {
    navigation.navigate('SignUp')
  }

  return (
    <StartView 
      modalVisible={modalVisible}
      closeModal={closeModal}
      openModal={openModal}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      signIn={signIn}
      goToSignUpView={goToSignUpView}
    />
  )
}