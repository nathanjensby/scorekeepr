/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home';
import GenericContainer from './components/GenericContainer'
import PingPongContainer from './components/PingPongContainer'
import SpadesContainer from './components/SpadesContainer'

export default class scorekeepr extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Home',
                        index: 0 ,
                        id: 'Home'
                      }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    )
  }

  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Home':
        return(<Home navigator={navigator} title='Home' />)
      case 'GenericContainer':
        return(<GenericContainer navigator={navigator} title='GenericContainer'
         />)
         case 'PingPongContainer':
           return(<PingPongContainer navigator={navigator} title='PingPongContainer'
            />)
            case 'SpadesContainer':
              return(<SpadesContainer navigator={navigator} title='SpadesContainer'
               />)
    }
  }
}




AppRegistry.registerComponent('scorekeepr', () => scorekeepr);

























console.disableYellowBox = true;
