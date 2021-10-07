import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import {useFormikContext} from 'formik';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import useFormikField from 'src/common/hooks/useFormikField';
import {CONTACT_INFORMATION} from 'src/navigation/constants';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const LocationInfo = ({navigation}) => {
  const formik = useFormikContext();
  const {handleFieldProps, validateErrorFields} = useFormikField({formik});
  const continueDisabled = !validateErrorFields(['city', 'country']);
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="City" {...handleFieldProps('city')} />
        <Input label="Country" {...handleFieldProps('country')} />
        <Button
          text="Continue"
          disabled={continueDisabled}
          onPress={() => navigation.navigate(CONTACT_INFORMATION)}
        />
      </View>
    </View>
  );
};

export default LocationInfo;
