/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>
          Kawai To do!
        </Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New to Do"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FC3E44',
  },
  title : {
    color: 'white',
    fontSize: 45,
    fontWeight: '200',
    marginTop: 50,
    marginBottom: 30
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    width: width-25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android:{
        evevation: 3
      }
    })
  }
});
