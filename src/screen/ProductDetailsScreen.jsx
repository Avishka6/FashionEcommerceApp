import { StyleSheet, Image, View,Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useContext } from 'react'
import { CartContext } from '../context/CartContex'
import { useNavigation } from '@react-navigation/native'

const imageUrl = 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab';


const sizes = ['S','M','L','XL']
const colorsArray = ['#91A1B0','#B11D1D','#1F44A3','#9F632A','#1D752B','#000000']

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const route = useRoute();
  const item = route.params?.item;
  const [selectedSize,setSelectedSize] = useState(null);
  const [selectedColor,setSelectedColor] = useState(null);
  const handleAddToCart = (item) => {
    item.size = selectedSize;
    item.color = selectedColor;
    addToCart(item);
    navigation.navigate('CART');
  };

  return (
     <LinearGradient 
     colors={['#EDE0F3', '#FFFBFC']} 
     style={styles.container}>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <Image source={{uri: item?.image}} style={styles.coverImage}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={[styles.title,styles.price]}>${item?.price}</Text>
      </View>
      <Text style={[styles.title,styles.sizeText]}>Size</Text>
      <View style={styles.sizeContainer}>
        {
          sizes.map((size)=>{
            return(
              <TouchableOpacity style={styles.sizeValueContainer}
              onPress={() => {setSelectedSize(size)}}
              >
                <Text style={[styles.sizeValue, 
                  selectedSize == size && {color:'#E55B5B'}]}>{size}</Text>
              </TouchableOpacity>
            )
          }
        )
        }
      </View>
      <Text style={[styles.title,styles.colorText]}>
        Colors
      </Text>
      <View style={styles.colorContainer}>
          {colorsArray.map((color)=>{
            return(
              <TouchableOpacity onPress={()=>{
                setSelectedColor(color);
              }} style={[styles.circleBorder,selectedColor===color &&
                {borderColor:color,
                 borderWidth:2,
                }
              ]}>
                <View style={[styles.circle,{backgroundColor:color}]}/>
              </TouchableOpacity>
            )
          })
          }
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{
        handleAddToCart(item);
      }}>
        <Text style={styles.buttonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>
     </LinearGradient>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        marginVertical:20,
        paddingHorizontal:20,
    },
    coverImage:{
        width:'100%',
        height:350,
    },
    contentContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:20,
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        color:'#444444',
    },
    price:{
        color:'#4D4C4C'
    },
    sizeContainer:{
        flexDirection:'row',
        marginHorizontal:20,
    },
    sizeText:{
        marginHorizontal:20,
    },
    sizeValueContainer:{
      height:36,
      width:36,
      borderRadius:18,
      backgroundColor:'#FFFFFF',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:10,
    },
    sizeValue:{
        fontSize:18,
        fontWeight:'600',
    },
    colorText:{
        marginHorizontal:20,
        marginTop:10,
    },
    colorContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
    },
    circle:{
        height:36,
        width:36,
        borderRadius:20,

    },
    circleBorder:{
        height:48,
        width:48,
        borderRadius:24,
        borderColor:'#CFCFCF',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        
    },
    button:{
        backgroundColor:'#E96E6E',
        // height:66,
        padding:10,
        margin:10,
        borderRadius:20
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize:24,
        fontWeight:'600',
        textAlign:'center',
    }
})