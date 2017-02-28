import { Deck, Player, Grid } from './index'
import _ from 'lodash'

export default class Game {
  constructor() {
    this.setNewGame()
    this.deal = this.deal.bind( this )
  }

  deal() {
  this.grid.fillNulls( this.deck )
  }


  checkForSet( setArray ) {
    if ( setArray ) {
      return 
    }
    const keys = Object.keys( setArray[0] )
    delete keys['image']

    const result = keys.reduce( ( acc, key ) => {
      acc[key] = Game.compareSet( setArray, key )
      return acc
    }, {} )

    if ( Object.values( result ).includes( false ) ) {
      return false
    }
    return true
  }

  setNewGame() {
    this.player = new Player()
    this.deck = new Deck()
    this.deck.cards = _.shuffle( this.deck.cards )
    this.grid = new Grid()
  }


  static isSame = function( setArray, property ) {
    return (setArray[0][property] === setArray[1][property])
      && ( setArray[1][property] === setArray[2][property] )
  }
  static areAllDifferent = function( setArray, property ) {
    return (setArray[0][property] !== setArray[1][property])
      && ( setArray[1][property] !== setArray[2][property] )
      && ( setArray[0][property] !== setArray[2][property] )
  }
  static compareSet = function( setArray, key ) {
   if ( Game.isSame( setArray, key ) || Game.areAllDifferent( setArray, key ) ) {
       return true
     }
     return false
  }

}

// const game = new Game()
// game.deal()
// console.log( game.grid )
