import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage.js';
import WebViewScreen from '../screens/WebViewScreen.js';
import {connect} from 'react-redux'

import ErrorMessage from '../helper/Error.js'

import {Dissmis_Error} from '../action/Actions'
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const screenOptions = {
headerShown: false
}
function App(props) {
  return (
    <SafeAreaProvider style={{ flex: 1,}}>
    <SafeAreaView style={{flex:1,position: 'relative'}}>
    <ErrorMessage {...props}/>
        <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="WebView" component={WebViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    </SafeAreaView>
    </SafeAreaProvider>
    );
}





function mapStateToProps(state) {
let {Loading,error,errorMessage}= state.AppReducers
  return {Loading:Loading,error:error,errorMessage:errorMessage}
}


const mapDispatchToProps = {Dissmis_Error}

 export default connect(mapStateToProps,mapDispatchToProps)(App)
