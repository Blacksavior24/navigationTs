import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {
  
  const navigator = useNavigation()

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>
      <PrimaryButton
        label='Regresar'
        onPress={()=> navigator.goBack()}
      />

      <PrimaryButton
        label='Regresar al home'
        onPress={()=> navigator.dispatch(StackActions.popToTop())}
      />

    </View>
  )
}