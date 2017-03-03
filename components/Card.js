import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Switch,
  View
} from 'react-native'




export default class Card extends Component {

  onPressButton() {
    this.props.onTouch( this.props.card )
  }

  setCardStyle( color ) {
    return this.props.cardStyle( color )
  }


  render() {
    let image = this.props.card !== null
    ? <Image source={this.props.card.image} style={ cardStyles.img } />
    : <Text> NULL </Text>

    let color = this.props.card.selected ? '#00008b' : '#FFFFFF'
    let cardStyle = this.setCardStyle( color )

    return (
    <View style={ cardStyle }>
      <TouchableHighlight style={ cardStyles.overlay } onPress={this.onPressButton.bind( this )} activeOpacity={1}  >
          { image }
      </TouchableHighlight>
    </View>
    )
  }
}

const cardStyles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'contain',
    transform: [ {rotate: '90deg'} ]
  },
  overlay: {
    flex: 1
  }
})
