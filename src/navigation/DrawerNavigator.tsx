import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerNavParamList } from '../types/types'
import HomeStack from './HomeStack'
import ProfileScreen from '../screens/ProfileScreen'

const Drawer = createDrawerNavigator<DrawerNavParamList>()

const drawerOptions = {
    headerShown: false,
    drawerActiveTintColor: '#c0eb6a',
    drawerStyle: {
      backgroundColor: '#484d4b',
    },
}

export default function DrawerNavigator() {

  return (
    <Drawer.Navigator screenOptions={drawerOptions}>
        <Drawer.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen 
          name='MyProfile' 
          component={ProfileScreen}
          options={{
            headerShown: false
          }}
        />
    </Drawer.Navigator>
  )
}