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
    let imageStyle = this.props.card.number === null
      ? cardStyles.nullImg
      : cardStyles.img

    let color = this.props.card.selected ? '#00008b' : 'rgba( 0, 0, 0, 0)'
    let cardStyle = this.setCardStyle( color )

    let image = this.props.card !== null
    ? <Image source={this.props.card.image} style={ imageStyle } />
    : <Text> NULL </Text>

    let touchable = (
      <TouchableHighlight style={ cardStyles.overlay } onPress={this.onPressButton.bind( this )} activeOpacity={1}  >
        { image }
      </TouchableHighlight>
    )

    let nullCard = (
      <View>
        { image }
      </View>
    )

    let cardDisplay = this.props.card.number !== null
      ? touchable
      : nullCard

    return (
    <View style={ cardStyle }>
      {cardDisplay}
    </View>
    )
  }
}

const cardStyles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'contain',
    transform: [ {rotate: '90deg'} ],
  },
  nullImg: {
    flex: 1,
    resizeMode: 'contain'
  },
  overlay: {
    flex: 1,
    borderWidth: 1,
    // borderColor: '#ffffff',
    borderRadius: 5,
    width: 75,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
})
