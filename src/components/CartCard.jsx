import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const imageUrl = 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg';

const CartCard = ({item,deleteItemFromCart}) => {
  return (
    <View style={styles.container} > 
        <Image source={{uri:item?.image}} style={styles.coverImage}/>
        <View style={styles.cardContent}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>${item?.price}</Text>
            <View style={styles.circleSizeContainer}>
                <View style={[styles.circle,{backgroundColor: item?.color}]}/>
                <View style={styles.sizeCircle}>
                    <Text style={styles.sizeText}>{item?.size}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity onPress={()=>{
            deleteItemFromCart(item);
        }}>
            <FontAwesome6 name='trash' size={22} color={'#F68CB5'}/>
        </TouchableOpacity>
        
        
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        flexDirection:'row',
    },
    coverImage:{
        width:'25%',
        height:125,
        borderRadius:10,
    },
    cardContent:{
        flex:1,
        marginHorizontal:15,
    },
    title:{
        fontSize:20,
        color:'#444444',
        fontWeight:'500',
    },
    price:{
        marginVertical:10,
        color:'#797979',
        fontSize:18,
    },  
    circle:{   
        height:32,
        width:32,
        borderRadius:16,
    },
    circleSizeContainer:{
        flexDirection:'row',
        marginVertical:10,
    },
    sizeCircle:{
        height:32,
        width:32,
        borderRadius:16,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    },
    sizeText:{
        fontSize:18,
        fontWeight:'500',
    },
})