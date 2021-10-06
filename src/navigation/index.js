import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ON_BOARDING} from './constants';
import OnBoarding from 'src/screens/OnBoarding';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ON_BOARDING}>
      <Stack.Screen name={ON_BOARDING} component={OnBoarding} />
    </Stack.Navigator>
  );
};

export default Navigation;
