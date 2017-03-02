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
    render() {
      const cards = this.props.grid.cardsInPlay
        .map( (card, key) => <Card key={key} card={card} onTouch={this.props.touchCard} cardStyle={this.props.cardStyle }/> )
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
    flexWrap: 'wrap',
    flex: 1
  },
})
