import React from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {style} from './style';
import {SvgUri} from 'react-native-svg';

const ContactUS = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#f2dedc'}}>
      <View style={style.view}>
        <Text style={style.concactUsTag}>Contact Us</Text>
      </View>

      <View style={style.View}>
        <TextInput style={style.input} placeholder="Enter Your Name" />
        <TextInput
          style={style.input}
          placeholder="Please tell us your query!"
        />
        <Button title="submit" />
        <SvgUri
          width="100%"
          height="100%"
          uri="https://metadata%2Eunstoppabledomains%2Ecom/image-src/guptasiddharth%2Eblockchain.svg"
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Join with us to make the world more beautiful. </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={style.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactUS;
