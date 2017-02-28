import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Card from './Card'

export default class Grid extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      cardsInPlay: props.grid.cardsInPlay
    }
  }

    render() {
      const cards = this.state.cardsInPlay
        .map( (card, key) => <Card key={key} card={card} /> )
      return (
        <View>
          {cards}
        </View>
      )
    }
}
