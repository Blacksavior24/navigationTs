import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/routes/StackNavigator';
import { SideMenuNavigator } from './src/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './src/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  )
}