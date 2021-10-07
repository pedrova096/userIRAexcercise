import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_INFORMATION,
  LOCATION_INFORMATION,
  PERSONAL_INFORMATION,
} from 'src/navigation/constants';
import headerOptions, {
  backgroundPrimary,
  headerBack,
} from 'src/navigation/header';
import PersonalInfo from 'src/screens/RegistrationGroup/PersonalInfo';
import LocationInfo from 'src/screens/RegistrationGroup/LocationInfo';
import ContactInfo from 'src/screens/RegistrationGroup/ContactInfo';
import {Formik} from 'formik';
import {
  createValidationSchema,
  REQUIRED_EMAIL,
  REQUIRED_STRING,
} from 'src/constants/schemas';

const Stack = createNativeStackNavigator();

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  country: '',
  dayOfBirth: '',
  mobileNumber: '',
};

const validationSchema = createValidationSchema({
  firstName: REQUIRED_STRING,
  lastName: REQUIRED_STRING,
  email: REQUIRED_EMAIL,
  city: REQUIRED_STRING,
  country: REQUIRED_STRING,
  dayOfBirth: REQUIRED_STRING,
  mobileNumber: REQUIRED_STRING,
});

const Registration = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => null}
      validateOnMount
      validationSchema={validationSchema}>
      <Stack.Navigator
        screenOptions={{...headerOptions, ...backgroundPrimary}}
        initialRouteName={PERSONAL_INFORMATION}>
        <Stack.Screen name={PERSONAL_INFORMATION} component={PersonalInfo} />
        <Stack.Screen
          name={LOCATION_INFORMATION}
          component={LocationInfo}
          options={headerBack}
        />
        <Stack.Screen
          name={CONTACT_INFORMATION}
          component={ContactInfo}
          options={headerBack}
        />
      </Stack.Navigator>
    </Formik>
  );
};

export default Registration;
