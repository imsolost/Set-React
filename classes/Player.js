
export default class Player {
  constructor( name ) {
    this.name = name || 'Player',
    this.score = 0,
    this.selectedCards = []
    this.addCard = this.addCard.bind( this )
  }

  addCard( card ) {
    if ( this.selectedCards.length === 2 ) {
      this.selectedCards.push( card )
      return this.selectedCards
    }
    this.selectedCards.push( card )
  }

  clearSet() {
    this.selectedCards = []
  }

  updateScore() {

  }
}
