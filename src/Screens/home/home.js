import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  BackHandler,
  Button,
  Image,
} from 'react-native';

import {styles} from './style';
import {Banners} from './banners';
import exitApp from '../../components/exitApp';
import analytics from '@react-native-firebase/analytics';

const Home = props => {
  useEffect(() => {
    console.log('testkdflajdsffads');
    exitApp();
  }, []);
  function imageSVG() {
    return (
      <Image
        source={{
          uri: 'https://metadata.unstoppabledomains.com/image-src/guptasiddharth.blockchain.svg',
        }}
      />
    );
  }

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
          <Banners />
          {/* <Button title="click" onPress={imageSVG()} /> */}
        </View>
        <View>
          <Button
            title="Add To Basket"
            onPress={async () =>
              await analytics().logEvent('basket', {
                id: 3745092,
                item: 'mens grey t-shirt',
                description: ['round neck', 'long sleeved'],
                size: 'L',
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
