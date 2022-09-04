import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Navigation from './src/navigation/index.js';
import reducer from './src/reducer';
const middleware = [thunk];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, {}, enhancer);


export default function AppContainer(){
  return (<Provider store={store}>

<Navigation/>

    </Provider>
    )
}

const styles = StyleSheet.create({
});
