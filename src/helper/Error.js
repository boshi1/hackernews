import * as React from 'react';
import { View, Text ,ActivityIndicator,TouchableOpacity} from 'react-native';

import {ErrorStyle}  from './style/ErrorStyle.js'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ErrorMessage(props){
  if(!props.error){
    return null
  }
  return (
    <View style={ErrorStyle.Container}>
    <View style={ErrorStyle.LeftContainer}>
    <Ionicons name="information-circle" size={20} color="red" />
    <Text style={ErrorStyle.TextContent}>{props.errorMessage}</Text>
    </View>
    <TouchableOpacity style={ErrorStyle.RightContainer} onPress={()=>{props.Dissmis_Error()}}>
    <AntDesign name="closesquare" size={20} color="gray" />
    </TouchableOpacity>
    </View>
  )
}
