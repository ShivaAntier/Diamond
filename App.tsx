import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/Screens/Login/login';
import MyTabs from './src/Screens/MyTabs/mytabs';
import Register from './src/Screens/RegisterUser/Register';
import Splash from './src/Screens/splash/splash';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="home" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
