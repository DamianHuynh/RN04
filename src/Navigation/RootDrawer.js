import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, SettingScreen} from '.';
import RootStack from './RootStack';

const Drawer = createDrawerNavigator();

export default class RootDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home-Drawer" component={RootStack} />
        <Drawer.Screen name="Setting-Drawer" component={SettingScreen} />
      </Drawer.Navigator>
    );
  }
}
