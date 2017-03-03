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
  Image
} from 'react-native';
import Board from './Board'

export default class SetReact extends Component {
  render() {
    return (
      <Image source={ require('./components/cards/background.png') } style={styles.backgroundImage} />
      <View style={styles.container}>
        <Board className="board"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  }
});

AppRegistry.registerComponent('SetReact', () => SetReact);
