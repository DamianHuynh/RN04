import {View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class PlayerSelect extends Component {
  render() {
    const {image} = this.props;
    return (
      <View style={styles.selectItemContainer}>
        <Image source={image} style={styles.selectItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: '#c0bf2c',
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItem: {
    height: 60,
    width: 60,
  },
});
