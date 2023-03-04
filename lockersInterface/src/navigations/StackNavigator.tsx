import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Test from '../views/Test';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Test"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
