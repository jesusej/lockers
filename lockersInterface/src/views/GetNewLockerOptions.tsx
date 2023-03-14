import {useNavigation} from '@react-navigation/native';
import React from 'react';
import LockerOptions from '../templates/LockerOptions';

const GetNewLockerOptions = () => {
  const navigation = useNavigation();

  return (
    <LockerOptions
      title="Select how to open your new locker"
      qrFunction={() => navigation.navigate('End')}
      pwdFunction={() => navigation.navigate('GetNewLocker')}
    />
  );
};

export default GetNewLockerOptions;
