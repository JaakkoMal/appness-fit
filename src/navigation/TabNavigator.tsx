import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavParamList } from '../types/types'
import { HomeIcon, ProfileIcon } from '../constants/Icons'
import HomeStack from './HomeStack'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator<TabNavParamList>()

const tabBarOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#c0eb6a',
    tabBarInactiveBackgroundColor: '#484d4b',
    tabBarActiveBackgroundColor: '#484d4b',
    tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#535957'
    }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            tabBarIcon: () => (
              <HomeIcon />
            )
          }}
        />
        <Tab.Screen 
          name='MyProfile' 
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <ProfileIcon />
            )
          }}
        />
    </Tab.Navigator>
  )
}