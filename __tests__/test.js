import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={style.View}>
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

const style = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warpper: {
    width: '80%',
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    width: '80%',
    padding: 10,
  },
  link: {
    color: 'blue',
  },
});

export default Login;