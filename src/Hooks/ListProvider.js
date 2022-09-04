import * as React from 'react';
import {   LayoutProvider } from "recyclerlistview";

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export  const useLayoutProvider=(height)=>{
  const [layoutProvider] = React.useState(
   new LayoutProvider(
     (index) => 1,
     (type, dim) => {
       dim.width = windowWidth
       dim.height = height
     }
   )
 )
 return [layoutProvider]
}
