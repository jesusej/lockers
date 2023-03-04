import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home} from '../views';
import LockerSelector from '../views/LockerSelector';

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
      <Stack.Screen name="LockerSelector" component={LockerSelector} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
