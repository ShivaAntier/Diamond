import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {style} from './style';

const ContactUS = props => {
  return (
    <View>
      <Text style={style.concactUsTag}>Contact Us</Text>
      <TextInput style={style.input} placeholder="Enter Your Name" />
      <TextInput style={style.input} placeholder="Please tell us your query!" />
      <Button title="submit" />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Join with us to make the world more beautiful. </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={style.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactUS;
