import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const ChildComponent = () => {
  console.log('render ChildComponent');
  return (
    <View>
      <Text>ChildComponent</Text>
    </View>
  );
};

export default memo(ChildComponent);
