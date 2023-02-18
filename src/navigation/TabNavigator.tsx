import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavParamList } from '../types/types'
import HomeStack from './HomeStack'
import ProfileView from '../views/ProfileView'

const Tab = createBottomTabNavigator<TabNavParamList>()

const tabBarOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#c0eb6a',
    tabBarInactiveBackgroundColor: '#484d4b',
    tabBarActiveBackgroundColor: '#484d4b',
    tabBarStyle: {
        borderTopWidth: 0
    }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen name="HomeStack" component={HomeStack}/>
        <Tab.Screen name='MyProfile' component={ProfileView}/>
    </Tab.Navigator>
  )
}