import React, {Component} from 'react';
import RootStack from './RootStack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingScreen} from '.';

const Tab = createBottomTabNavigator();

export default class RootTab extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeTab"
          component={RootStack}
          options={{tabBarIcon: () => <AntIcon name="home" size={20} />}}
        />
        <Tab.Screen
          name="SettingTab"
          component={SettingScreen}
          options={{tabBarIcon: () => <AntIcon name="home" size={20} />}}
        />
      </Tab.Navigator>
    );
  }
}
