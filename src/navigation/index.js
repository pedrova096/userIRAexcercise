import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ON_BOARDING,
  REGISTRATION_GROUP,
  SUCCESS_REGISTRATION,
} from './constants';
import headerOptions, {
  contentBackgroundLight,
  headerBackgroundPrimary,
} from './header';
import OnBoarding from 'src/screens/OnBoarding';
import Registration from 'src/screens/RegistrationGroup/Registration';
import SuccessRegistration from 'src/screens/SuccessRegistration';

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
      screenOptions={{headerShown: false, ...contentBackgroundLight}}
      initialRouteName={ON_BOARDING}>
      <Stack.Screen
        name={ON_BOARDING}
        component={OnBoarding}
        options={{...headerOptions, ...headerBackgroundPrimary}}
      />
      <Stack.Screen name={REGISTRATION_GROUP} component={Registration} />
      <Stack.Screen
        name={SUCCESS_REGISTRATION}
        component={SuccessRegistration}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
