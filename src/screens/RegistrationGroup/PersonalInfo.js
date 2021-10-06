import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import {LOCATION_INFORMATION} from 'src/navigation/constants';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const PersonalInfo = ({navigation}) => {
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email Name" />
        <Button
          text="Continue"
          onPress={() => navigation.push(LOCATION_INFORMATION)}
        />
      </View>
    </View>
  );
};

export default PersonalInfo;
