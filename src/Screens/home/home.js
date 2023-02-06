import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native';

import {styles} from './style';
import {Banners} from './banners'

function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001123" />
      <ScrollView>
        <View style={{backgroundColor: '#001123'}}>
          <Text style={styles.logoText}>Diamond</Text>
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
          <Banners/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
