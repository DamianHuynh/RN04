import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Background} from './assets';
import ButtonContainer from './ButtonContainer';
import SelectContainer from './SelectContainer';
import InfoContainer from './InfoContainer';
import PlayerViewItemContainer from './PlayerViewItemContainer';

export default class GameAppStateManagement extends Component {
  //#region

  // onPressSelect = selectedOption => {
  //   this.setState({playerSelected: selectedOption});
  // };

  // onPressPlayButton = () => {
  //   if (this.state.times > 0) {
  //     const randomBotSelect = setInterval(() => {
  //       const botSelected =
  //         selectedOptionConstant[Math.floor(Math.random() * 3)];
  //       this.setState({botSelected});
  //     }, 100);
  //     setTimeout(() => {
  //       clearInterval(randomBotSelect);
  //       const {times, score} = this.checkResult();
  //       this.setState({times, score});
  //     }, 2000);
  //   } else {
  //     Alert.alert(
  //       'Thông Báo',
  //       'Bạn đã hết lượt chơi vui lòng ấn "Reset" để chơi lại',
  //     );
  //   }
  // };

  // checkResult = () => {
  //   const {
  //     playerSelected: {type: playerSelectedType},
  //     botSelected: {type: botSelectedType},
  //     times,
  //     score,
  //   } = this.state;
  //   if (playerSelectedType === botSelectedType) {
  //     return {times: times - 1, score};
  //   } else if (
  //     (playerSelectedType === 'rock' && botSelectedType === 'scissor') ||
  //     (playerSelectedType === 'scissor' && botSelectedType === 'paper') ||
  //     (playerSelectedType === 'paper' && botSelectedType === 'rock')
  //   ) {
  //     return {times: times + 1, score: score + 1};
  //   } else {
  //     return {times: times - 1, score: score - 1};
  //   }
  // };

  // onPressResetButton = () => this.setState({times: 9, score: 0});
  //#endregion

  render() {
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <PlayerViewItemContainer />
          <SelectContainer />
          <InfoContainer />
          <ButtonContainer
          // onPressPlayButton={this.onPressPlayButton}
          // onPressResetButton={this.onPressResetButton}
          />
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
});

// GameAppStateManagement
//   | PlayerViewItemContainer nhận props: {player, bot}
//      | PlayerViewItem nhận props: {playerImage, playerSelectedImage}
