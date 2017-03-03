import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 180
    }
    this.countDown()
  }
  countDown() {
      setInterval( () => {
        this.setState( {time: this.state.time - 1})
      }, 1000 )
  }

  render() {
    return <Text style={styles.time}> Time Left: {this.state.time}</Text>
  }

}

const styles = StyleSheet.create({
  score: {
    color: 'red',
    fontSize: 22,
    alignSelf: 'center',
  }
})
