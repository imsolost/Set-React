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
        image: props.imageSrc
      }
  }
  // const img = '../Public/cards/1.gif'

  render() {
    // console.log( this.state.image )
    // const path = this.state.image
    return (
      <View>
        <Image source={ './cards/1.gif' } />
      </View>
    )
  }
}
