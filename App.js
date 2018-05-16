import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'

const DAD_JOKE_API = 'https://icanhazdadjoke.com'
const DAD_IMAGE =
  'https://pbs.twimg.com/profile_images/3078903617/a66c58171a99f27f9a876f2fc9877a0c_400x400.jpeg'
const headers = {
  Accept: 'application/json'
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
        <View style={{ paddingBottom: 50 }}>
          <Text style={{ textAlign: 'center' }}>{this.state.joke}</Text>
        </View>
        <TouchableOpacity onPress={this.fetchJoke}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: DAD_IMAGE }}
          />
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
    justifyContent: 'center'
  }
})
