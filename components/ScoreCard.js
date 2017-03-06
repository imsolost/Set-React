import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Dimensions from 'Dimensions'

export default ScoreCard = ( props ) => {

  return <Text style={styles.score}>Score: {props.score}</Text>
}

const styles = StyleSheet.create({
  score: {
    color: 'red',
    fontSize: 22,
    alignSelf: 'center',
  }
})
