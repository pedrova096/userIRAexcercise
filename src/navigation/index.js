import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ON_BOARDING,
  REGISTRATION_GROUP,
  SUCCESS_REGISTRATION,
  USERS_REGISTERED,
  USER_DETAIL,
} from './constants';
import headerOptions, {contentBackgroundLight, headerBack} from './header';
import OnBoarding from 'src/screens/OnBoarding';
import Registration from 'src/screens/RegistrationGroup/Registration';
import SuccessRegistration from 'src/screens/SuccessRegistration';
import UsersRegistered from 'src/screens/UsersRegistered';
import UserDetail from 'src/screens/UserDetail';

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
      screenOptions={contentBackgroundLight}
      initialRouteName={ON_BOARDING}>
      <Stack.Screen
        name={ON_BOARDING}
        component={OnBoarding}
        options={{...headerOptions}}
      />
      <Stack.Screen name={REGISTRATION_GROUP} component={Registration} />
      <Stack.Screen
        name={SUCCESS_REGISTRATION}
        component={SuccessRegistration}
      />
      <Stack.Screen
        name={USERS_REGISTERED}
        component={UsersRegistered}
        options={{...headerOptions}}
      />
      <Stack.Screen
        name={USER_DETAIL}
        component={UserDetail}
        options={{...headerOptions, ...headerBack}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
