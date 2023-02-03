import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstScreen from './firstScreen';
import SecondScreen from './secondScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FirstScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
