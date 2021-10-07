import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_INFORMATION,
  LOCATION_INFORMATION,
  PERSONAL_INFORMATION,
  SUCCESS_REGISTRATION,
  USER_DETAIL,
} from 'src/navigation/constants';
import headerOptions, {
  headerBackgroundPrimary,
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
import {useAddUser, useEditUser} from 'src/services/userService';
import {CommonActions} from '@react-navigation/routers';

const Stack = createNativeStackNavigator();

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  country: '',
  dateOfBirth: '',
  mobile: '',
};

const validationSchema = createValidationSchema({
  firstName: REQUIRED_STRING,
  lastName: REQUIRED_STRING,
  email: REQUIRED_EMAIL,
  city: REQUIRED_STRING,
  country: REQUIRED_STRING,
  dateOfBirth: REQUIRED_STRING,
  mobile: REQUIRED_STRING,
});

const Registration = ({route: {params}, navigation}) => {
  const userId = params?.data?.id;
  const isUpdate = !!userId;
  const {mutateAsync: addUser} = useAddUser({
    onSuccess: res =>
      navigation.dispatch(state => {
        return CommonActions.reset({
          ...state,
          routes: [
            {
              key: Date.now().toString(16),
              name: SUCCESS_REGISTRATION,
              params: {
                id: res.id,
              },
            },
          ],
          index: 0,
        });
      }),
  });
  const {mutateAsync: editUser} = useEditUser({
    id: userId,
    onSuccess: () => navigation.navigate(USER_DETAIL, {id: userId}),
  });
  return (
    <Formik
      initialValues={isUpdate ? params.data : initialValues}
      onSubmit={isUpdate ? editUser : addUser}
      validateOnMount
      validationSchema={validationSchema}>
      <Stack.Navigator
        screenOptions={{...headerOptions, ...headerBackgroundPrimary}}
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
