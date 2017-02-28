import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native'




export default class Card extends Component {
  onPressButton() {
    this.props.onTouch(this.props)
  }


  render() {
    let image = this.props.card !== null
      ? <Image source={this.props.card.image} style={cardStyles.img}/>
      : <Text> NULL </Text>
    return (
      <TouchableHighlight style={cardStyles.card} onPress={this.onPressButton.bind( this )}>
        { image }
      </TouchableHighlight>
    )
  }
}
const cardStyles = StyleSheet.create({
  card: {
    height: 110,
    width: 90,
    margin: 3,
    borderWidth: 1
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    transform: [ {rotate: '90deg'} ]
  }//0,
  // card: {
  //   width: width*.27,
  //   height: height*.17,
  //   borderWidth: 1,
  //   marginBottom: 3
  // }
})
