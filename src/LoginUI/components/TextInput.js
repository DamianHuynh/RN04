import {Text, View, StyleSheet, TextInput as RNTextInput} from 'react-native';
import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class TextInput extends Component {
  render() {
    const {title, password, errorMsg} = this.props;
    return (
      <View style={styles.wrapperTextInput}>
        <RNTextInput
          style={[
            styles.textInputContainer,
            !!errorMsg && {backgroundColor: '#f9c8c8'},
          ]}
          {...this.props}
        />
        <Text style={styles.textInputTitle}>{title}</Text>
        {password && (
          <EntypoIcon
            name="eye"
            color="#bbb"
            size={20}
            style={styles.rightIcon}
          />
        )}
        {!!errorMsg && (
          <Text style={{color: 'red', marginTop: 5}}>* {errorMsg}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperTextInput: {
    marginBottom: 10,
  },
  textInputContainer: {
    backgroundColor: '#F3F0EE',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  textInputTitle: {
    color: '#bbb',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  rightIcon: {
    position: 'absolute',
    bottom: 25,
    right: 20,
  },
});
