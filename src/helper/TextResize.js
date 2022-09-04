import {Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window');

//XIAOMI MI 10 as base size
//Make Dimensions responsive
const baseWidth = 393;
const baseHeight = 851;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size) => Math.ceil((size * scale));
