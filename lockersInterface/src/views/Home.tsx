import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#28e6dd', '#433cc7']} style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Smartlock</Text>
        <Text style={styles.subtitle}>What would you like to do today?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GetNewLocker')}>
            <Text style={styles.buttonText}>Get a new locker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LockerOpener')}>
            <Text style={styles.buttonText}>Open an existing locker</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    flex: 1,
    paddingVertical: '25%',
  },
  title: {
    fontSize: 64,
    textAlign: 'center',
    color: '#fff',
    marginVertical: '2%',
  },
  subtitle: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e9bd15',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    minWidth: '21%',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Home;
