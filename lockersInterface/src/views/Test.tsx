import {View, Text} from 'react-native';
import React from 'react';

const Test = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
      }}>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
