import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const LockerOptions = ({
  qrFunction = () => {},
  pwdFunction = () => {},
  title = 'Select how to open your locker',
}) => {
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
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={qrFunction}>
            <Icon name="wifi" size={64} color="black" />
            <Text style={styles.buttonText}>Open by sensor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pwdFunction}>
            <Icon name="form-textbox-password" size={64} color="black" />
            <Text style={styles.buttonText}>Open by password</Text>
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
    paddingVertical: '20%',
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

export default LockerOptions;
