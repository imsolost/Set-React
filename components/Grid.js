import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Dimensions from 'Dimensions'
import Card from './Card'

const { width, height } = Dimensions.get('window')

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
        <View style={gridStyle.gridBox}>
          {cards}
        </View>
      )
    }
}



const gridStyle = StyleSheet.create({
  gridBox: {
    borderWidth: 1,
    borderColor: 'blue',
    height: height*.7,
    width: width*.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
})
