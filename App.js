/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: '700'}}>
        Hello React Native Application
      </Text>
    </View>
  );
};

export default App;
