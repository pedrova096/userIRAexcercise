import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ON_BOARDING, REGISTRATION_GROUP} from './constants';
import headerOptions, {backgroundPrimary} from './header';
import OnBoarding from 'src/screens/OnBoarding';
import Registration from 'src/screens/RegistrationGroup/Registration';

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
      <Stack.Screen
        name={ON_BOARDING}
        component={OnBoarding}
        options={{...headerOptions, ...backgroundPrimary}}
      />
      <Stack.Screen name={REGISTRATION_GROUP} component={Registration} />
    </Stack.Navigator>
  );
};

export default Navigation;
