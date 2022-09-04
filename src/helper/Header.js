
import *  as React from 'react';
import { View,Image, TouchableOpacity,Text,FlatList,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {Colors} from '../utils/Colors.js';
import {HeaderStyle} from './style/HeaderStyle.js'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontsNames} from '../utils/Fonts.js';
export default function Header(props){


return(
  <View style={HeaderStyle.HeaderContainer}>
{ props.Back === true ? (<TouchableOpacity  style={HeaderStyle.CloseButton} onPress={()=>{props.navigation.pop()}} >
  <AntDesign name="close" size={30} color="black" />
  </TouchableOpacity>):null}
  <View style={HeaderStyle.TextContainer}><Text   style={{...HeaderStyle.H5Title,...{color:Colors.LightPink,fontFamily:FontsNames.SemiBold }}}>{props.HeaderText}</Text></View>
  </View>
)

}
