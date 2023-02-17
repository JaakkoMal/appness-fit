import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import ProfileView from '../views/ProfileView'

const Tab = createBottomTabNavigator()

const tabBarOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#c0eb6a',
    tabBarInactiveBackgroundColor: '#42564f',
    tabBarActiveBackgroundColor: '#42564f',
    tabBarStyle: {
        borderTopWidth: 0
    }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name="HomeStack" component={HomeStack}/>
        <Tab.Screen name='My Profile' component={ProfileView}/>
    </Tab.Navigator>
  )
}