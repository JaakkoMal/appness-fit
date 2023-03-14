import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { DrawerNavParamList } from '../types/types'
import CustomDrawerContent from './CustomDrawerContent'
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
    <Drawer.Navigator 
      screenOptions={drawerOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
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

/*const LogoutButton = (props: DrawerContentComponentProps) => {
  return (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem label='Logout' onPress={() => {}} />
  </DrawerContentScrollView>
  )
}*/