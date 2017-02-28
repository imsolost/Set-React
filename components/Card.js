import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native'




export default class Card extends Component {
  constructor( props ) {
    super( props )
      this.state = {
        image: props.card.image,
        number: props.card.number
      }
  }


  render() {
    //const filePath = require("./cards/1.gif")
    return (
      <View>
        <Image source={this.state.image} />
      </View>
    )
  }
}
