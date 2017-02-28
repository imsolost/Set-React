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
        number: props.card.number,
        shape: props.card.shape,
        color: props.card.color,
        shading: props.card.shading
      }
  }


  render() {
    return (
      <View style={cardStyles.card}>
        <Image source={this.state.image} style={cardStyles.img}/>
      </View>
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
    // height: 75,
    // width: 105,
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
