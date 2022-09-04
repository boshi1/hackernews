
import *  as React from 'react';
import {View,ActivityIndicator} from 'react-native';

import {Colors} from '../utils/Colors.js';
export const RenderFooter=({FooterLoading})=>{
  if(FooterLoading  === false){
    return null
  }
return (<View >
  <ActivityIndicator size="large" color={Colors.Orange} />
  {/*To make sure handleListEnd is called When the end is reached -> due to custom header*/}
  <View style={{width: 50,height: 50}}/>
  </View>)
}
