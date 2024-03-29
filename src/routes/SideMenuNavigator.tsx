import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { Ionicon } from '../components/Ionicon';

const Drawer = createDrawerNavigator();


export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
        drawerContent={(props)=> <CustomDrawerContent {...props} />}

      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle:{
          borderRadius: 100,
          paddingHorizontal: 20,

        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon: ({color})=> (<Ionicon name='bonfire-outline' color={color}  />)  }} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{drawerIcon: ({color})=> (<Ionicon name='person-circle-outline' color={color}  />)  }} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50
        }} 
      />
      <DrawerItemList {...props} />
        

    </DrawerContentScrollView>
  )
}