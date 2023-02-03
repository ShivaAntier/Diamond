import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyTabs from './src/Screens/MyTabs/mytabs';
import Splash from './src/Screens/splash/splash';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
