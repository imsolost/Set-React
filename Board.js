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
    this.touchCard = this.touchCard.bind( this )
  }

  touchCard( card ) {
    let newState = this.state.game
    let newSet = newState.player.addCard( card )
    if ( newSet ) {
      console.log('We has a set! ', newSet)
      newState.player.clearSet()
    }
    this.setState({ game: newState })
    console.log( 'In player array thingy',  this.state.game.player.selectedCards )
  }

  render() {
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <Text>SCORE</Text>
        </View>

        <Grid grid={this.state.game.grid} touchCard={this.touchCard}/>

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
    justifyContent: 'space-between'
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
  }
})
