import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Accelerometer } from 'expo'

const colorCombinations = {
  even: {
    buttonColor: 'red',
    backgroundColor: 'white',
  },
  odd: {
    buttonColor: 'blue',
    backgroundColor: 'black',
  }
}

export default class App extends React.Component {
  // Disregard lines 16 and 17, they're javascript stuff
  // If you want to know what it does, ask me in person
  constructor(props) {
    super(props)

    // This sets the Component's initial state
    // State is a piece of data that represents the things that can change in the view
    this.state = {
      timesShaken: 0
    }
  }

  componentDidMount() {
    this.startListeningToAccelerometer()
  }

  componentWillUnmount() {
    this.stopListeningToAccelerometer()
  }


  logPhoneShake = () => {
    this.setState({
      timesShaken: this.state.timesShaken + 1
    })
  }

  startListeningToAccelerometer = () => {
    this.listener = Accelerometer.addListener(data => {
      console.log(data)
      if (data.x > 1.5) {
        this.logPhoneShake()
      } else if (data.y > 1.5) {
        this.logPhoneShake()
      } else if (data.z > 1.5) {
        this.logPhoneShake()
      }
    })
  }


  // The render function runs every time you update the state
  render() {
    // The modulo operator divides the FIRST number by the SECOND number and returns the REMAINDER
    const countIsOdd = this.state.timesShaken % 2 === 0
    let buttonColor
    let backgroundColor

    if (countIsOdd) {
      buttonColor = colorCombinations.odd.buttonColor
      backgroundColor = colorCombinations.odd.backgroundColor
    } else {
      buttonColor = colorCombinations.even.buttonColor
      backgroundColor = colorCombinations.even.backgroundColor
    }

    // { ...styles.container, backgroundColor } takes the styles.container object and adds the backgroundColor key
    return (
      <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
        <Button
          onPress={this.logPhoneShake}
          title={`Phone has been shook ${this.state.timesShaken} times.`}
          color={buttonColor}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
