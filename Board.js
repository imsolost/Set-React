import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dimensions from 'Dimensions'

const { width, height } = Dimensions.get('window')

export default class Board extends Component {

  render() {
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <Text>SCORE</Text>
        </View>

        <View style={boardStyles.gridBox}>

          <View style={boardStyles.card}><Text>CARD</Text></View>
        </View>

        <View style={boardStyles.buttons}>
          <Text>BUTTONS</Text>
        </View>
      </View>
    )
  }
}



const boardStyles = StyleSheet.create({
  board: {
    backgroundColor: 'white',
    height: height*.85,
    width: width*.85,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gridBox: {
    borderWidth: 1,
    borderColor: 'blue',
    height: height*.7,
    width: width*.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  scoreBoard: {
    width: width*.75,
    height: 50,
    borderWidth: 1,
    borderColor: 'red'
  },
  buttons: {
    borderWidth: 1,
    borderColor: 'green',
    height: 50
  },
  card: {
    width: width*.27,
    height: height*.17,
    borderWidth: 1,
    marginBottom: 3
  }
})
