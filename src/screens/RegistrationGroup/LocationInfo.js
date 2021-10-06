import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Input from 'src/common/components/Input';
import {CONTACT_INFORMATION} from 'src/navigation/constants';
import StepperRegistration from './components/StepperRegistration';
import styles from './styles/personalInfo.styles';

const LocationInfo = ({navigation}) => {
  return (
    <View>
      <StepperRegistration />
      <View style={styles.content}>
        <Input label="City" />
        <Input label="Country" />
        <Button
          text="Continue"
          onPress={() => navigation.navigate(CONTACT_INFORMATION)}
        />
      </View>
    </View>
  );
};

export default LocationInfo;
