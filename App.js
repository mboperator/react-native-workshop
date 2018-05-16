import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const quotes = [
  'ask again later',
  'lol no',
  'maybe next time',
  'probably',
  'yes',
  'hellllllllyeah',
  'rekt'
]

export default class App extends React.Component {
  state = {
    activeQuote: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.eightBall}>
            <Text style={styles.eightBallText}>
              {quotes[this.state.activeQuote]}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eightBall: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  eightBallText: {
    color: 'white'
  }
});
