import { Deck, Player, Grid } from './index'
import _ from 'lodash'

export default class Game {
  constructor() {
    this.setNewGame()
  }

  deal() {
  this.grid.fillNulls( this.deck )
  }


  checkForSet() {

  }

  setNewGame() {
    this.player = new Player()
    this.deck = new Deck()
    this.deck.cards = _.shuffle( this.deck.cards )
    this.grid = new Grid()
  }
}

// const game = new Game()
// game.deal()
// console.log( game.grid )
