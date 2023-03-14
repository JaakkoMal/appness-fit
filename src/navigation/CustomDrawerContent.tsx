import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { useAppDispatch } from '../redux/hooks'
import { getAuth, signOut } from '../../firebase/firebaseConfig'
import { logout } from '../redux/features/loginSlice'

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const dispatch = useAppDispatch()  

  const logOut = () => {
    const auth = getAuth()
    signOut(auth)
    .then(() => {
        console.log('Signed out')
        dispatch(logout())
    })
    .catch(error => {
        console.log(error)
    })
  }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={logOut}/>
    </DrawerContentScrollView>
  )
}