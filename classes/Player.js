import _ from 'lodash'

export default class Player {
  constructor( name ) {
    this.name = name || 'Player',
    this.score = 0,
    this.selectedCards = []
    this.addCard = this.addCard.bind( this )
  }

  addCard( card ) {
    this.selectedCards.push( card )
  }

  removeCard( card ) {
    console.log( 'REMOVING' )
    let newSelection = this.selectedCards.filter( selectedCard => {
      return !( Player.cardsAreEqual(selectedCard, card) )
    })
    console.log( newSelection )
    this.selectedCards = newSelection

  }

  checkIfCardIsSelected( card ) {
    let currentSelection = this.selectedCards
    return currentSelection.reduce( ( acc, currentCard ) => {
      if ( Player.cardsAreEqual( currentCard, card ) ) {
        return acc = true
      }
      return acc
    }, false )
  }

  selectionIsEmpty() {
    return this.selectedCards.length === 0
  }

  clearSet() {
    this.selectedCards = []
  }

  addScorePoint() {
    this.score++
  }

  static cardsAreEqual( card1, card2 ) {
    return _.isEqual( card1, card2 )
  }
}
