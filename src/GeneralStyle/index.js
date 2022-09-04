
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {scaledSize } from '../helper/TextResize.js'

 const Styles={
LowerButton:{},
HomeContainer:{
  justifyContent: 'space-between',alignItems: 'center',paddingTop:scaledSize(windowWidth*0.1),paddingBottom:scaledSize(windowWidth*0.1),width:scaledSize(windowWidth*0.8),height:"100%"
},
Button:{
  width:'90%',borderWidth:1,borderColor:"lightgray",justifyContent:'center',alignItems:'center',padding:scaledSize(6),borderRadius:5
},
H1Title:{
  fontSize:scaledSize(20),lineHeight:scaledSize(25),fontFamily:'Poppins-Bold',textAlign:'center',
}
,H5Title:{
  fontSize:scaledSize(20),lineHeight:scaledSize(25),fontFamily:'Poppins-Regular',textAlign:'center',
},
ButtonText:{
  fontSize:scaledSize(20),lineHeight:scaledSize(25),fontFamily:'Poppins-Light'
}

}
export {scaledSize,Styles}
