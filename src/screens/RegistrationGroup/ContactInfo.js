import {useFormikContext} from 'formik';
import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import useFormikField from 'src/common/hooks/useFormikField';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const ContactInfo = ({navigation}) => {
  const formik = useFormikContext();
  const {handleFieldProps, validateErrorFields} = useFormikField({formik});
  const continueDisabled = !validateErrorFields(['dayOfBirth', 'mobileNumber']);
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="Date of Birth" {...handleFieldProps('dayOfBirth')} />
        <Input
          label="Mobile Number"
          keyboardType="number-pad"
          {...handleFieldProps('mobileNumber')}
        />
        <Button
          text="¡Create!"
          disabled={continueDisabled}
          onPress={() => navigation.navigate()}
        />
      </View>
    </View>
  );
};

export default ContactInfo;
