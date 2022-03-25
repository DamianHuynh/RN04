import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import RootTab from './RootTab';
import RootDrawer from './RootDrawer';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Home Screen</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                id: 1,
                message: 'Hello Route',
              })
            }>
            Move to Detail
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Setting Screen</Text>
        <Text onPress={() => this.props.navigation.navigate('Detail')}>
          Move to Detail
        </Text>
      </SafeAreaView>
    );
  }
}
export class DetailScreen extends Component {
  render() {
    console.log(this.props);
    const {
      route: {params},
    } = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Detail Screen</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            {params.id} - {params.message}
          </Text>
          <Text onPress={() => this.props.navigation.push('Detail')}>
            Move another Detail
          </Text>
          <Text onPress={() => this.props.navigation.navigate('Home')}>
            Navigate Home
          </Text>
          <Text onPress={() => this.props.navigation.goBack()}>Go back...</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default class RootApp extends Component {
  render() {
    return <RootDrawer />;
  }
}
