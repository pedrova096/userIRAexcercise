import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ON_BOARDING, PERSONAL_INFORMATION} from './constants';
import headerOptions, {backgroundPrimary} from './header';
import OnBoarding from 'src/screens/OnBoarding';
import PersonalInfo from 'src/screens/RegistrationGroup/PersonalInfo';

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
      <Stack.Group screenOptions={{...headerOptions, ...backgroundPrimary}}>
        <Stack.Screen name={PERSONAL_INFORMATION} component={PersonalInfo} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
