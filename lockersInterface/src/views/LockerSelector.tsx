import {Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LockerSelector = () => {
  return (
    <LinearGradient colors={['#4f7ef5', '#200d7d']} style={styles.container}>
      <Text>Locker Selector</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LockerSelector;
