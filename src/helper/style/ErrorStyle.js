
import {Styles,scaledSize} from '../../GeneralStyle/index.js'

import {Colors} from '../../utils/Colors.js';

import {FontsNames} from '../../utils/Fonts.js';
export const ErrorStyle={
Container:{width: '100%',backgroundColor: Colors.WhiteWithOpacity,borderBottomColor: Colors.lightgray,borderBottomWidth: 1,top: 0,paddingTop:scaledSize(60),paddingBottom: scaledSize(20),justifyContent: 'space-around',position: 'absolute',zIndex: 42343824,top: 0,left: 0,flexDirection: 'row'},
LeftContainer:{flexDirection: 'row',width: '80%'},
TextContent:{fontFamily: FontsNames.Regular,marginLeft: scaledSize(10)},
RightContainer:{width: '20%',alignItems: 'center'}
}
