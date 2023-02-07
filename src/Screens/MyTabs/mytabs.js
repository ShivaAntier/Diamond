import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../home/home';
import Pipes from '../home/pipes';
import Paints from '../home/paints';
import ContactUs from '../ContactUs/contactUs';
import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={require('D:\\Diamond\\Diamond\\src\\images\\TabBarIcons\\home.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Paints}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={require('D:\\Diamond\\Diamond\\src\\images\\TabBarIcons\\paint.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pipes"
        component={Pipes}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={require('D:\\Diamond\\Diamond\\src\\images\\TabBarIcons\\pipe.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'ContactUs',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={{width: 40, height: 40}}
                source={require('D:\\Diamond\\Diamond\\src\\images\\TabBarIcons\\contact.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
