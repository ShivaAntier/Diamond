/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {styles} from './style';

function Pipes() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001123" />
      <ScrollView>
        <View style={{backgroundColor: '#001123'}}>
          <Text style={styles.logoText}>D-Flex Pipes</Text>
        </View>
        <View style={{backgroundColor: '#bf9595'}}>
          <Text style={styles.discription}>
            {'\n'}
            {'\n'}Welcome There,{'\n'}
            Here You can have all kinds of materials that you need to make your
            world beutiful.
            {'\n'}
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Pipes;
