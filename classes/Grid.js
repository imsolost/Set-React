
export default class Grid {
  constructor() {
    this.cardsInPlay = new Array( 12 ).fill( null )
  }

  fillNulls( deck ) {
    const cardsInPlay = this.cardsInPlay.map( card =>  {
      if ( card === null ) {
        return deck.cards.pop()
      }
    })
    this.cardsInPlay = cardsInPlay
    return deck
  }
}
