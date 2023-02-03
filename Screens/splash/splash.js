/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#001123" />
      <Image style={styles.logo} source={require('../../logo.jpg')} />
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

export default Splash;
