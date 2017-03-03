import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import Dimensions from 'Dimensions'
import Game from './classes/Game'
import Grid from './components/Grid'
import ScoreCard from './components/ScoreCard'
import Timer from './components/Timer'

const game = new Game()
game.deal()
const { width, height } = Dimensions.get('window')

export default class Board extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      game: game,
      time: 10
    }
    this.touchCard = this.touchCard.bind( this )
    this.startNewGame = this.startNewGame.bind( this )
    this.countDown = this.countDown.bind( this )
    //this.countDown()
  }

  touchCard( card ) {
    let game = this.state.game
    let currentSelection = game.player.selectedCards

    if ( game.player.selectionIsEmpty() ) {
      game.player.addCard( card )
      game.grid.toggleSelectOnCard( card )
      this.setState({ game })
      return
    }

    if ( game.player.checkIfCardIsSelected( card ) ) {
      game.player.removeCard( card )
      game.grid.toggleSelectOnCard( card )
    } else {
      game.player.addCard( card )
      game.grid.toggleSelectOnCard( card )
    }

    if ( currentSelection.length === 3 ) {
      game.handleSet()
      game.player.clearSet()
      game.deal()
      game.grid.resetSelected()
    }

    this.setState({ game })
  }

  startNewGame() {
    let game = this.state.game
    game.setNewGame()
    game.deal()
    this.setState({ game })
  }

  handleReDeal() {
    let game = this.state.game
    game.reDeal()
    this.setState({ game })
  }

  cardStyleFunc( color ) {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      height: height * .175, // 110,
      width: width * .25,// 75,
      margin: 1,
      borderWidth: 2,
      borderColor: color,
    }
  }

  countDown() {
      // setInterval( () => {
      //   if (this.state.time > 0) {
      //     this.setState( {time: this.state.time - 1})
      //   }
      //     }, 1000 )
      //   }
      setInterval( () => {
        this.setState( {time: this.state.time - 1})
      }, 1000 )
  }


  render() {
    let game = this.state.game
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <ScoreCard score={game.player.score}/>
          <Timer time={this.state.time}/>
        </View>

        <Grid grid={game.grid} touchCard={this.touchCard} cardStyle={this.cardStyleFunc} />

        <View style={boardStyles.buttonRack}>
          <Button onPress={this.startNewGame} title="New Game" color="#841584"/>
          <Button onPress={this.handleReDeal.bind( this )} title="redeal" color="#841584"/>
        </View>
      </View>
    )
  }
}



const boardStyles = StyleSheet.create({
  board: {
    height: height*.90,
    width: width*.85,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scoreBoard: {
    width: width*.85,
    height: 25,
  },
  buttonRack: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
