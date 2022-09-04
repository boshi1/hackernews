
import {Styles,scaledSize} from '../../GeneralStyle/index.js'

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {Colors} from '../../utils/Colors.js';
export const HeaderStyle={

  ////white,black ##ff6600 #f6f6e2
  HeaderContainer:{flexDirection: 'row',backgroundColor:Colors.Orange,height:50,borderBottomWidth:1,borderBottomColor:'lightgray',width:windowWidth,justifyContent: 'center',alignItems: 'center'},
  CloseButton:{left: scaledSize(5),top: scaledSize(10),height: scaledSize(30),width: scaledSize(30),zIndex: 2,position: 'absolute'},
  TextContainer:{width: '80%',alignItems:'center',justifyContent: 'center',paddingTop: scaledSize(5)},
  H5Title:Styles.H5Title
}
