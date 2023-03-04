import {Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

// ['#4f7ef5', '#200d7d']

const Home = () => {
  return (
    <LinearGradient colors={['#28e6dd', '#433cc7']} style={styles.container}>
      <Text>Home</Text>
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

export default Home;
