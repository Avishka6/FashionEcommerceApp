import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, View, Image ,Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';




const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('HOME_STACK')} style={styles.appIconContainer}>
        {
          isCart? (
          <Ionicons name={"chevron-back"} size={24} color={"#E96E6E"} />
          ):(
        <Image source={require('../assets/appicon.png')} style={styles.appIcon} 
        />
          )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}
      <Image source={require('../assets/dp.png')} style={styles.dp} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,       // ensures children are clipped to the circle
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 28,             // fill the container so clipping works
    height: 28,

  },
  dp: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  myCart:{
    fontSize:28,
    fontWeight:'600',
    color:'#000000',
  }
})