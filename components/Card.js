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
  constructor( props ) {
    super( props )
    this.state = {
      selected: false
    }
  }

  onPressButton() {
    this.state.selected = !this.state.selected
    console.log( this.state.selected )
    this.props.onTouch(this.props.card)
  }

  render() {
    let image = this.props.card !== null
    ? <Image source={this.props.card.image} style={ cardStyles.img } />
    : <Text> NULL </Text>

    return (
    <View style={ this.state.selected ? { backgroundColor: '#00008b' } : {}, cardStyles.card }>
      <TouchableHighlight style={ cardStyles.overlay } onPress={this.onPressButton.bind( this )} activeOpacity={.5} underlayColor={'#00008b'} >
          { image }
      </TouchableHighlight>
    </View>
    )
  }
}

class ToggleButton extends Component {

  render() {
    <TouchableHighlight onPress={this.onPressButton.bind( this )} activeOpacity={.5} underlayColor={'#00008b'} style={ cardStyles.overlay }>
      <View>
        { image }
      </View>
    </TouchableHighlight>
  }
}


const cardStyles = StyleSheet.create({
  card: {
    height: 110,
    width: 90,
    margin: 3,
    borderWidth: 1,
  },

  // selectedCard: {
  //   borderWidth: 5,
  //   shadowColor: '#00008b',
  //   shadowOffset: { width: 5, height: 5 },
  //   shadowOpacity: .5
  // },
  img: {
    flex: 1,
    resizeMode: 'contain',
    transform: [ {rotate: '90deg'} ]
  },
  overlay: {
    borderWidth: 1,
    flex: 1
  }
})
