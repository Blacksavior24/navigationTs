import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { HamburgerMenu } from '../../components/HamburgerMenu';

export const HomeScreen = (props: any) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   })
  // }, [])
  
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton
        label='Productos'
        onPress={()=> navigation.navigate('Products')}
      />
      <PrimaryButton
        label='Settings'
        onPress={()=> navigation.navigate('Settings')}
      />
      
    </View>
  )
}
