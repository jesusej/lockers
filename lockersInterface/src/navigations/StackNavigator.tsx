import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {End, GetNewLocker, Home, LockerOpener} from '../views';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LockerOpener" component={LockerOpener} />
      <Stack.Screen name="GetNewLocker" component={GetNewLocker} />
      <Stack.Screen name="End" component={End} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
