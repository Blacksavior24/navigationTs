import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top
      }}
    >
      <Text>ProfileScreen</Text>
    </View>
  )
}
