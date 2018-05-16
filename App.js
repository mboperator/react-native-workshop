import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const DAD_JOKE_API = 'https://icanhazdadjoke.com'
const headers = {
  Accept: 'application/json',
}

export default class App extends React.Component {
  state = {
    joke: 'This is not a joke',
    loading: false
  }
  fetchJoke = () => {
    fetch(DAD_JOKE_API, { headers })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({ joke: json.joke })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.joke}</Text>
        <Button title="joke pls" onPress={this.fetchJoke} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
