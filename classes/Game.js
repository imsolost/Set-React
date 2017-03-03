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

    if ( Game.isAValidSet( selectedCards ) === true ){
      this.player.addScorePoint()

      for (let i = 0; i < Game.CARDS_IN_PLAY_LENGTH; i++) {
        for (let j = 0; j < Game.MAX_SET_LENGTH; j++) {
          if ( _.isEqual(cardsInPlay[i], selectedCards[j]) ) {
            cardsInPlay[i] = null
          }
        }
      }
      this.grid.cardsInPlay = cardsInPlay
    }
  }

  reDeal() {
    let deck = this.deck
    let grid = this.grid

    grid.cardsInPlay.forEach( cardInPlay => {
      if ( cardInPlay.number === null ) {
        return
      }
      deck.cards.push( cardInPlay )
    })
    this.grid.clear()
    deck.cards = _.shuffle( deck.cards )
    this.deck = deck
    this.grid = grid
    this.deal()
  }



  static CARDS_IN_PLAY_LENGTH = 12
  static MAX_SET_LENGTH = 3

  static isAValidSet( setArray ) {
    let properties = Object.keys( setArray[0] )
      .filter( property => property !== 'image' )

    let result = properties.reduce( ( acc, property ) => {
    acc[property] = Game.compareSetProperty( setArray, property )
      return acc
    }, {} )

    if ( Object.values( result ).includes( false ) ) {
      return false
    }
    return true
  }

  static allAreSame( setArray, property ) {
    return ( setArray[0][property] === setArray[1][property])
      && ( setArray[1][property] === setArray[2][property] )
  }

  static allAreDifferent( setArray, property ) {
    return (setArray[0][property] !== setArray[1][property])
      && ( setArray[0][property] !== setArray[2][property] )
      && ( setArray[1][property] !== setArray[2][property] )
  }

  static compareSetProperty( setArray, property ) {
    return Game.allAreSame( setArray, property )
      || Game.allAreDifferent( setArray, property )
  }

}
