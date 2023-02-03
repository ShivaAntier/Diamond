/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

function home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001123" />
      <Text style={{color: 'white'}}>THis is first tag!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001123',
  },
  logo: {
    height: 300,
    width: 300,
  },
  red: {
    color: 'red',
  },
});

export default home;
