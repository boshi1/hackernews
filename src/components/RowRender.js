
import *  as React from 'react';
import {View,StyleSheet, TouchableOpacity, Text,Dimensions} from 'react-native';
import {timeSince} from '../utils/TimeSince.js'
import {scaledSize} from '../GeneralStyle/index.js'
import {Colors} from '../utils/Colors.js';
import {FontsNames} from '../utils/Fonts.js';


const windowWidth = Dimensions.get('window').width;

   const RowRenderer = ({navigation,type, data, index}) => {

   //Renders a UIVIEW with gesture handling
   //navigaton is a prop from parent
   //Width and height MUST BE Defined and can't Be used as percentage before rendering -> since it is a reuseable component
   //Timesince Function is very basic
   //replace based on regex to caputre domain
  return (<TouchableOpacity onPress={()=>{navigation.push('WebView',{url:data.url})}} style={styles.container}>
<View>
<Text style={styles.Title}>{data.title}</Text>
<Text style={styles.Url}>({data.url.replace(/^(.*\/\/[^\/?#]*).*$/,"$1")})</Text>
</View>
<View style={styles.TextContainer}>
<Text style={styles.TextScore}>{data.score}{' '}<Text style={styles.Points}>points</Text></Text>
<Text style={styles.TextBy}>{' '}by{' '}{data.by}</Text>
<Text style={styles.Date}>{' '}⦁{' '}{timeSince(data.time)}</Text>
</View>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  container: {
padding: scaledSize(4),height: scaledSize(80),flexDirection: 'column',borderBottomWidth: scaledSize(1),borderBottomColor: Colors.lightgray,justifyContent: 'center',width: windowWidth*0.95,marginLeft: windowWidth*0.025
  },
  Title:{
    fontFamily: 'Poppins-Regular',fontSize: scaledSize(15),lineHeight: scaledSize(18),
  },
  TextContainer:{flexDirection: 'row'},
  TextScore:{color:Colors.Orange,fontSize:scaledSize(11),fontFamily: FontsNames.Regular},
 TextBy:{color:Colors.Orange,fontSize: scaledSize(11),fontFamily: FontsNames.Light},
 Date:{color:Colors.black,fontSize: scaledSize(11),fontFamily: FontsNames.Light},
 Url:{fontFamily: FontsNames.Light,fontSize: 9,lineHeight: 10},
 Points:{color:'black',fontFamily: FontsNames.Light}
});

export default RowRenderer
