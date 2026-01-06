import { StyleSheet, Text, View,FlatList,TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';


const categories =['Trending Now','All','New','Mens','Womens'];

const HomeScreen = () => {
    const [products,setProducts] = useState(data.products);
    const [selectedCategory,setSelectedCategory] = useState('Mens');

    const handleLiked = (item) => {
        const newProducts = products.map((product) => {
            if (product.id === item.id) {
                return { ...product, isLiked: !product.isLiked  };
            }
            return product;
        });
        setProducts(newProducts);
    }

    return (
        <LinearGradient colors={['#EDE0F3', '#FFFBFC']} style={styles.container}>
            <Header />
            {/* <View style={{
                flexDirection:'row',

            }}>
            <ProductCard/>
            <ProductCard/>
            </View> */}
            <FlatList 
            numColumns={2}
            ListHeaderComponent={
                <>
                    <Text style={styles.matchText}>Match Your Style</Text>
                    <View style={styles.inputContainer}>
                     <View style={styles.iconContainer}>   
                        <Fontisto name='search' size={26} color={'#000000'} />
                     </View>
                     <TextInput style={styles.textInput}
                     placeholder='Search'/>
                    </View>
            <FlatList 
            data={categories} 
            renderItem={({item})=>(<Category item={item} 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            />
        )}
            keyExtractor={(item)=>item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
                </>
            }
            data={products}
            renderItem={({item,index}) => 
            <ProductCard item={item} 
            handleLiked={handleLiked}/>}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item.id}
            contentContainerStyle={{
                    paddingBottom:100
            }}
            
            />
        </LinearGradient>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{ 
        padding:20,
    },
    matchText:{
        fontSize:28,
        fontWeight:'700',
        marginTop:25,
        color:'#000000',
    },
    inputContainer:{
        marginVertical:20,
        backgroundColor:'#ffffff',
        height:48,
        borderRadius:12,
        alignItems:'center',
        flexDirection:'row',

   
    },
    iconContainer:{
        marginHorizontal:5,
    },
    textInput:{
        flex:1,
    }
});