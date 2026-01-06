import { StyleSheet, Image, View, Text,TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";   
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({item,handleLiked}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('PRODUCT_DETAILS',{item})
    }} style={styles.container}>
      <TouchableOpacity onPress={() => {handleLiked(item)}} style={styles.likeContainer}>
        {item?.isLiked ? (
                <FontAwesome name="heart" size={20} color={"#E55B5B"} />
            ) : (
                <FontAwesome name="heart-o" size={20} color={"#E55B5B"} />
            )
        }
      </TouchableOpacity>
      <Image source={{uri:item.image}} style={styles.coverImage} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  coverImage: {
    height: 256,
    position: "relative",
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9C9C9C",
  },
  content: {
    paddingLeft: 20,
  },
  likeContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#ffffff",
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
