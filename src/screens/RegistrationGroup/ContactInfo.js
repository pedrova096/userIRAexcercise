import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const ContactInfo = ({navigation}) => {
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="Date of Birth" />
        <Input label="Mobile Number" />
        <Button text="¡Create!" onPress={() => navigation.navigate()} />
      </View>
    </View>
  );
};

export default ContactInfo;
