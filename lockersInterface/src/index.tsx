import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Test from './views/Test';
import StackNavigator from './navigations/StackNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

const index = () => {
  return (
      <App />
  );
};

export default index;
