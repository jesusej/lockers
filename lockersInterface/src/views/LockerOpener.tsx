import {Text, StyleSheet, TouchableOpacity, View, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-gesture-handler';

const LockerOpener = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient colors={['#4f7ef5', '#200d7d']} style={styles.container}>
      <View style={[styles.back, {paddingTop: insets.top}]}>
        <Button
          title="Back"
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Open an existing locker</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Select a lock available</Text>
          <View style={styles.input}>
            <Picker>
              <Picker.Item label="01" value={1} />
              <Picker.Item label="02" value={2} />
            </Picker>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Enter a password</Text>
          <View style={styles.input}>
            <TextInput />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  back: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  subcontainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: '25%',
    paddingHorizontal: 0,
    margin: 0,
  },
  title: {
    fontSize: 44,
    textAlign: 'center',
    color: '#fff',
    marginBottom: '3%',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
  },
  input: {
    height: '60%',
    backgroundColor: '#fff',
    width: '50%',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e9bd15',
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: '2%',
    paddingVertical: 10,
    minWidth: '21%',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default LockerOpener;
