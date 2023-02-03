import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/home';
import Pipes from '../home/pipes';
import Paints from '../home/paints';
import ContactUs from '../ContactUs/contactUs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Paints}
        options={{
          tabBarLabel: 'Paints',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pipes"
        component={Pipes}
        options={{
          tabBarLabel: 'Pipes',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'ContactUs',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
