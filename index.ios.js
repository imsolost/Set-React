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
  View
} from 'react-native';
import Board from './Board'

export default class SetReact extends Component {
  render() {
    return (
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
    backgroundColor: '#5f9ea0',
  }
});

AppRegistry.registerComponent('SetReact', () => SetReact);
