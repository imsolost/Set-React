import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import Dimensions from 'Dimensions'
import Game from './classes/Game'
import Grid from './components/Grid'
import ScoreCard from './components/ScoreCard'
import Timer from './components/Timer'
import Popup from 'react-native-popup'

const game = new Game()
game.deal()
const { width, height } = Dimensions.get('window')

export default class Board extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      game: game,
      time: 0,
      isOver: false
    }
    this.touchCard = this.touchCard.bind( this )
    this.startNewGame = this.startNewGame.bind( this )
    this.gameOver = this.gameOver.bind(this)
  }

  componentDidMount() {
    this.startGamePopUp()
  }

  startGamePopUp() {
    this._popupStartGame.confirm({
      content: "There are four traits, make a set of three cards with each trait either matching on all three, or each card has different version of the trait.",
      ok: {
        callback: () => {
          this.startNewGame()
        },
      },
    })
  }

  touchCard( card ) {
    if (!this.state.isOver) {
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

  }

  startNewGame() {
    let game = this.state.game
    game.setNewGame()
    game.deal()
    this.setState({ game: game, isOver: false})
    this._child.resetTime()
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

  gameOver() {
    this.setState( {isOver: true})
    // this._popupEndGame.confirm({
    //   content: "Your name must be Josh, because you're a clown.",
    //   ok: {
    //     callback: () => {
    //       this.startNewGame()
    //     },
    //   },
    // })
  }



  render() {
    let game = this.state.game
    return (
      <View style={boardStyles.board}>

        <View style={boardStyles.scoreBoard}>
          <ScoreCard score={game.player.score}/>
          <Timer ref={child => { this._child = child }} time={this.state.time} gameOver={this.gameOver}/>
        </View>

        <Grid grid={game.grid} touchCard={this.touchCard} cardStyle={this.cardStyleFunc} />

        <View style={boardStyles.buttonRack}>
          <Button onPress={this.startNewGame} title="New Game" color="#841584"/>
          <Button onPress={this.handleReDeal.bind( this )} title="redeal" color="#841584"/>
        </View>
        <Popup ref={ popupEndGame => this._popupEndGame = popupEndGame }/>
        <Popup ref={ popupStartGame => this._popupStartGame = popupStartGame }/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width*.85,
    height: height*.05,
  },
  buttonRack: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
