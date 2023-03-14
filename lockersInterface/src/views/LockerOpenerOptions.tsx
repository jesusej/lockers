import React from 'react';
import LockerOptions from '../templates/LockerOptions';
import {useNavigation} from '@react-navigation/native';

const LockerOpenerOptions = () => {
  const navigation = useNavigation();

  return (
    <LockerOptions
      qrFunction={() => navigation.navigate('SensorMessage')}
      pwdFunction={() => navigation.navigate('LockerOpener')}
    />
  );
};

export default LockerOpenerOptions;
