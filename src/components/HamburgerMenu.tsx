import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { Ionicon } from './Ionicon';
import { globalColors } from '../theme/theme';

export const HamburgerMenu = () => {
    const navigation = useNavigation();

    useEffect(()=>{
      navigation.setOptions({
        headerLeft: () =>(
          <Pressable 
            style={{marginLeft: 5}}
            onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}>
            {/* <Text style={{color:'black'}}>Menú</Text> */}
            <Ionicon name='menu-outline' size={30} color={globalColors.primary} />
          </Pressable>
        )
      })
    },[])
  return (
    <>
    </>
  )
}
