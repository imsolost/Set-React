import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Dimensions from 'Dimensions'
import Game from './classes/Game'
import Grid from './components/Grid'

const game = new Game()
game.deal()
const { width, height } = Dimensions.get('window')

export default class Board extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      game: game
    }
  }

  render() {
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <Text>SCORE</Text>
        </View>

        <Grid grid={this.state.game.grid}/>

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
