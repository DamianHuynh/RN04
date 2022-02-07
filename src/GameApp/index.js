import {
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';
import {Background, Bot, Paper, Player, Rock, Scissor} from './assets';
import PlayerViewItem from './components/PlayerViewItem';
import PlayerSelect from './components/PlayerSelect';
import Button from './components/Button';

export default class GameApp extends Component {
  render() {
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.playerView}>
            <PlayerViewItem playerImage={Player} playerSelectedImage={Rock} />
            <PlayerViewItem playerImage={Bot} playerSelectedImage={Paper} />
          </View>
          <View style={styles.selectView}>
            <PlayerSelect image={Rock} />
            <PlayerSelect image={Paper} />
            <PlayerSelect image={Scissor} />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>Score: 0</Text>
            <Text style={styles.infoText}>Times: 9</Text>
          </View>
          <View style={styles.buttonView}>
            <Button title="Play" backgroundColor="pink" />
            <Button title="Reset" backgroundColor="yellow" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
  },
  playerView: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  selectView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  infoView: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#26ddbb',
  },
  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
