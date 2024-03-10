import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { HamburgerMenu } from '../../components/HamburgerMenu'
import { Ionicon } from '../../components/Ionicon'

export const Tab1Screen = () => {

  return (
    <View>
      <HamburgerMenu />
      <Text style={{color: 'black'}}>Tab1Screen</Text>
      <Ionicon name='rocket-outline' />
    </View>
  )
}
