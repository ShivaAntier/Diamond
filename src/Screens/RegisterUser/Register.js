import React, {useState, useEffect} from 'react';
import {
  Button,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {style} from './style';
function Register(props) {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [Visible, setVisible] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: '#f2dedc'}}>
      <View style={style.register}>
        <Text style={style.register}>Register</Text>
      </View>
      <View style={style.view}>
        <TextInput placeholder="Enter Email" style={style.input} />
        <TextInput placeholder="Enter Phone" style={style.input} />
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            marginBottom: 12,
          }}>
          <TextInput
            placeholder="Password"
            style={{
              width: '95%',
              padding: 10,
            }}
            secureTextEntry={Visible}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!Visible);
              setShow(!show);
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                alignItems: 'center',
                marginRight: 10,
              }}
              source={require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image1.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            marginBottom: 12,
          }}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'black'}
            style={{
              width: '95%',
              padding: 10,
            }}
            secureTextEntry={Visible}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!Visible);
              setShow(!show);
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                alignItems: 'center',
                marginRight: 10,
              }}
              source={require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image1.jpg')}
            />
          </TouchableOpacity>
        </View>
        <Button title="Register" />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>I already have an account! </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={style.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Register;
