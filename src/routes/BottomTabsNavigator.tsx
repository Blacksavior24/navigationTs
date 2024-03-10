import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { Ionicon } from '../components/Ionicon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: globalColors.background
        }}
        screenOptions={{
            //headerShown: false,
            tabBarActiveTintColor: globalColors.primary,
            tabBarLabelStyle:{
                marginBottom: 5,
            },
            headerStyle:{
                elevation: 0
            },

        }}  
    >
      <Tab.Screen 
        name="Tab1" 
        options={{title: 'Tab1', tabBarIcon: (props)=> (<Ionicon name="accessibility-outline" color={props.color} /> )}} 
        component={Tab1Screen} />
      <Tab.Screen 
        name="Tab2" 
        options={{title: 'Tab2', tabBarIcon: (props)=> (<Ionicon name="airplane-outline" color={props.color} />)}} 
        component={TopTabsNavigator} />
      <Tab.Screen 
        name="Tab3" 
        options={{title: 'Tab3', tabBarIcon: (props)=> (<Ionicon name="bar-chart-outline" color={props.color} />)}} 
        component={StackNavigator} />
    </Tab.Navigator>
  );
}