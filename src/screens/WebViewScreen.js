import * as React from 'react';
import {View, Image, TouchableOpacity, TextInput, Text, FlatList, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {Colors} from '../utils/Colors.js';
import Header from '../helper/Header.js'

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator
        color="#009688"
        size="large"
      />
    </View>
  );
};
export default function HomeScreen(props) {

    return (
      <View style={{flex:1}}>
      <Header HeaderText={'Article'}  navigation={props.navigation} Back={true} />
      <WebView
      startInLoadingState
         renderLoading={() =>  <ActivityIndicator size="large" color={Colors.Orange} />}
      source={{uri: props.route.params.url}}  />
      </View>
    )
}
