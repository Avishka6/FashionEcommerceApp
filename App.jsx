import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './src/screen/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContex';
import { useContext } from 'react';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home(){
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}} >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    

    

    <SafeAreaView style={styles.container}>
      <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
          }}initialRouteName='HOME_STACK'
          >
          <Tab.Screen name='HOME_STACK' component={MyHomeStack} options={{
            tabBarIcon: ({size,focused,color})=>{
              return <Entypo name={'home'} size={size} color={color} />;
            },
          }}/>
          {/* <Tab.Screen name='REORDER' component={Home} options={{
            tabBarIcon: ({size,color})=>{
              return <MaterialIcons name={'reorder'} size={size} color={color} />;
            },
          }}/> */}
          <Tab.Screen name='CART' component={CartScreen} options={{
            tabBarIcon: ({size,color})=>{
              const {carts} = useContext(CartContext);
              return (
              <View style={{position:'relative'}}>
              <MaterialDesignIcons 
              name={'cart'} 
              size={size} 
              color={color} 
              />
              <View style={{
                height:14,
                width:14,
                borderRadius:7,
                backgroundColor:color,
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                right:-10,
                top:-5,
              
                alignItems:'center',
              }}>
                <Text style={{
                  fontSize:10,
                  color:'#fff',
                  fontWeight:'500',
                }}>{carts?.length}</Text>
              </View>
              </View>
            );
            },
          }}/>
          {/* <Tab.Screen name='ACCOUNT' component={Home} options={{
            tabBarIcon: ({size,color})=>{
              return <FontAwesome6 name={'user'} size={size} color={color} />;
            },
          }}/> */}

        </Tab.Navigator>
      </NavigationContainer>
      </CartProvider>
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})