import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {style} from './style';
export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={style.view}>
      <TextInput
        style={style.input}
        value={email}
        placeholder="Enter Email "
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={style.input}
        value={password}
        placeholder="Enter Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button
        title="submit"
        onPress={() => {
          this.submit();
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={style.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
