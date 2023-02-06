import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {styles} from './style';

function Paints() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001123" />
      <ScrollView>
        <View style={{backgroundColor: '#001123'}}>
          <Text style={styles.logoText}>Diamond Paint</Text>
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
        <View>
          <Image
            style={styles.image}
            source={require('D:\\Diamond\\Diamond\\src\\images\\PaintImages\\paint.jpeg')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Paints;
