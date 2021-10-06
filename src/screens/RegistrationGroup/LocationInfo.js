import React from 'react';
import {View} from 'react-native';
import Arrow from 'src/common/components/Arrow';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const LocationInfo = ({}) => {
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="City" />
        <Input label="Country" />
        <Button text="Continue" />
      </View>
    </View>
  );
};

export default LocationInfo;
