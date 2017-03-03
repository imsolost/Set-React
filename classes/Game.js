import { Deck, Player, Grid } from './index'
import _ from 'lodash'

export default class Game {
  constructor() {
    this.setNewGame()
    this.deal = this.deal.bind( this )
  }

  setNewGame() {
    this.player = new Player()
    this.deck = new Deck()
    this.deck.cards = _.shuffle( this.deck.cards )
    this.grid = new Grid()
  }

  deal() {
  this.grid.fillNulls( this.deck )
  }

  handleSet() {
    let cardsInPlay = this.grid.cardsInPlay
    let selectedCards = this.player.selectedCards

    console.log( 'selectedCards --->', selectedCards )

    console.log( 'IS a VALID set? ', Game.isAValidSet( selectedCards ) )
    if ( Game.isAValidSet( selectedCards ) === true ){
      console.log( 'Is VALID --->', selectedCards )

      this.player.score++

      for (let i = 0; i < Game.CARDS_IN_PLAY_LENGTH; i++) {
        for (let j = 0; j < Game.MAX_SET_LENGTH; j++) {
          if ( _.isEqual(cardsInPlay[i].card, selectedCards[j].card) ) {
            cardsInPlay[i] = null
          }
        }
      }
      this.grid.cardsInPlay = cardsInPlay
    }
  }



  static CARDS_IN_PLAY_LENGTH = 12
  static MAX_SET_LENGTH = 3

  static isAValidSet( setArray ) {
    let properties = Object.keys( setArray[0].card )
      .filter( property => property !== 'image' )

    let result = properties.reduce( ( acc, property ) => {
      acc.push( Game.compareSetProperty( setArray, property ) )
      return acc
    }, [] )

    console.log( 'results    ', result )

    if ( result.includes( false ) ) {
      return false
    }
    return true
  }

  static areAllSame( setArray, property ) {
    return (setArray[0][property] === setArray[1][property])
      && ( setArray[1][property] === setArray[2][property] )
  }

  static areAllDifferent( setArray, property ) {
    return (setArray[0][property] !== setArray[1][property])
      && ( setArray[1][property] !== setArray[2][property] )
      && ( setArray[0][property] !== setArray[2][property] )
  }

  static compareSetProperty( setArray, property ) {
    console.log( property )
    if ( Game.areAllSame( setArray, property ) ){
      return true
    }
    if( Game.areAllDifferent( setArray, property ) ) {
      return true
    }
  }

}
