import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import {LOCATION_INFORMATION} from 'src/navigation/constants';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';
import {useFormikContext} from 'formik';
import useFormikField from 'src/common/hooks/useFormikField';

const PersonalInfo = ({navigation}) => {
  const formik = useFormikContext();
  const {handleFieldProps, validateErrorFields} = useFormikField({formik});
  const continueDisabled = !validateErrorFields([
    'firstName',
    'lastName',
    'email',
  ]);
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="First Name" {...handleFieldProps('firstName')} />
        <Input label="Last Name" {...handleFieldProps('lastName')} />
        <Input
          label="Email"
          {...handleFieldProps('email')}
          keyboardType="email-address"
        />
        <Button
          text="Continue"
          disabled={continueDisabled}
          onPress={() => navigation.push(LOCATION_INFORMATION)}
        />
      </View>
    </View>
  );
};

export default PersonalInfo;
