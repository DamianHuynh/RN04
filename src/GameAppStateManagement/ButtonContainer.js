import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Button from './components/Button';

export default class ButtonContainer extends Component {
  render() {
    const {onPressPlayButton, onPressResetButton} = this.props;
    return (
      <View style={styles.buttonView}>
        <Button
          title="Play"
          colors={['#ef0a72', '#fec5e3']}
          onPress={onPressPlayButton}
        />
        <Button
          title="Reset"
          colors={['#fdad3c', '#fbf40e']}
          onPress={onPressResetButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
