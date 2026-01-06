import { StyleSheet, Text, TouchableOpacity, View ,FlatList} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { CartContext } from '../context/CartContex'


const CartScreen = () => {
    const {carts,totalPrice,deleteItemFromCart} = useContext(CartContext);
  return (
    <LinearGradient 
     colors={['#EDE0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true}/>
      </View>
      {/* <CartCard />
      <CartCard /> */}

      <FlatList 
        data={carts}
        renderItem={({item}) => <CartCard item={item} deleteItemFromCart={deleteItemFromCart}/>}
        ListFooterComponent={
            <>
            <View style={styles.priceContainer}>
        <View style={styles.priceAndTitle}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>${totalPrice}</Text>
        </View>
        <View style={styles.priceAndTitle}>
            <Text style={styles.text}>Shipping:</Text>
            <Text style={styles.text}>$0.0</Text>
        </View>
        <View style={styles.devider}/>
        <View style={styles.priceAndTitle}>
            <Text style={styles.text}>Grand Total:</Text>
            <Text style={[{color:'black',fontWeight:'700',fontSize:18}]}>${totalPrice}</Text>
        </View>
      </View>
            </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100,}}
      />

      
      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    headerContainer:{
        marginBottom:20,
    },
    priceContainer:{
        marginTop:40,
    },
    priceAndTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginVertical:10,
    },
    text:{
        fontSize:18,
        color:'#757575',
    },
    devider:{
        borderWidth:2,
        borderColor:'#C0C0C0',
        marginTop:10,
    },
    checkoutContainer:{
        height:50,
        backgroundColor:'#E96E6E',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize:25,
        fontWeight:'500',
    },
})