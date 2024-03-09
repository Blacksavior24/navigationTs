import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'

const products = [
  { id: 1, name: 'Producto 1'},
  { id: 2, name: 'Producto 2'},
  { id: 3, name: 'Producto 3'},
  { id: 4, name: 'Producto 4'},
  { id: 5, name: 'Producto 5'},
  { id: 6, name: 'Producto 6'},
  { id: 7, name: 'Producto 7'},
  
]


export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>Productos:</Text>

      <FlatList
        data={products}
        renderItem={(data)=>(
          <PrimaryButton
          onPress={()=>{navigation.navigate('Product', {id: data.item.id, name: data.item.name})}}
          label={data.item.name}
          />
        )}
      />

      
      <Text style={{marginBottom: 10, fontSize: 30, color: 'black'}}>Ajustes</Text>
        <PrimaryButton
          onPress={()=>{navigation.navigate('Settings')}}
          label='Ajustes'
        />


    </View>
  )
}
