import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Dimensions from 'Dimensions'
import Game from './classes/Game'
import Grid from './components/Grid'

import _ from 'lodash'

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
    let game = this.state.game
    let currentSelection = game.player.selectedCards

    if ( game.player.selectionIsEmpty() ) {
      game.player.addCard( card )
      return
    }

    if ( game.player.checkIfCardIsSelected( card ) ) {
      game.player.removeCard( card )
    } else {
      game.player.addCard( card )
    }

    if ( currentSelection.length === 3 ) {
      game.handleSet()
      game.player.clearSet()
    }

    this.setState({ game })
  }



  render() {
    let game = this.state.game
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <Text>SCORE</Text>
        </View>

        <Grid grid={game.grid} touchCard={this.touchCard} />

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
