import _ from 'lodash'

export default class Grid {
  constructor() {
    this.cardsInPlay = new Array( 12 ).fill( null )
  }

  toggleSelectOnCard( card ) {
    let cardsInPlay = this.cardsInPlay
      .map( cardInPlay => {
        if ( _.isEqual( cardInPlay, card ) ){
          if ( cardInPlay.selected === true ) {
            cardInPlay.selected = false
          } else {
            cardInPlay.selected = true
          }
        }
        return cardInPlay
      })
    this.cardsInPlay = cardsInPlay
  }

  resetSelected() {
    let cardsInPlay = this.cardsInPlay
      .map( cardInPlay => {
        cardInPlay.selected = false
        return cardInPlay
      })
    this.cardsInPlay = cardsInPlay
  }

  fillNulls( deck ) {
    const cardsInPlay = this.cardsInPlay.map( card =>  {
      if ( card === null ) {
        return deck.cards.pop()
      }
      return card
    })
    this.cardsInPlay = cardsInPlay
    return deck
  }
}
