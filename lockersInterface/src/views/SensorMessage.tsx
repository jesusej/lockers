import {Text, StyleSheet} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const SensorMessage = () => {
  const navigation = useNavigation();

  const timer = useCallback(() => {
    setTimeout(() => {
      navigation.navigate('End');
    }, 5000);
  }, [navigation]);

  useEffect(() => timer(), [timer]);

  return (
    <LinearGradient colors={['#4f7ef5', '#200d7d']} style={styles.container}>
      <Text style={styles.title}>Locker ready!</Text>
      <Text style={styles.title}>Bring your key close to the locker</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    textAlign: 'center',
    color: '#fff',
    marginBottom: '2%',
  },
});

export default SensorMessage;
