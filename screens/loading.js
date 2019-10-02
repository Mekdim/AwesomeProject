import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import {auth,f, database} from '../config/config.js';
export  class Loading extends React.Component {
  componentDidMount() {
    f.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'login')
    })
 }
  render() {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})