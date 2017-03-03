import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time
    }
    this.doTime = this.doTime.bind(this)
    this.resetTime = this.resetTime.bind(this)
    this.doTime()
  }

  doTime() {
    this.setState( {time: this.state.time - 1})

    if (this.state.time > 0) {
      setTimeout(this.doTime, 1000)
    }
    else {
      this.props.gameOver()
    }
  }

  resetTime() {
    this.setState({ time: 180 })
  }

  render() {
    return <Text style={styles.time}> Time Left: {this.state.time}</Text>
  }

}

const styles = StyleSheet.create({
  time: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  }
})
