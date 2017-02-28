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
    game.player.addCard( card )

    if ( game.player.selectedCards.length === 3 ) {

      let newCardsInPlay = game.grid.cardsInPlay
      let selectedCards = game.player.selectedCards

      if ( game.checkForSet(selectedCards) ) {
        game.player.score += 1
        for (let i = 0; i < newCardsInPlay.length; i++) {
          for (let j = 0; j < 3; j++) {
            if ( _.isEqual(newCardsInPlay[i].card, selectedCards[j].card) ) {
              console.log( 'FOUND ZE EQUAL' )
              newCardsInPlay[i] = null
            }
          }
        }
        game.grid.cardsInPlay = newCardsInPlay
      }

      //console.log( game )
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
