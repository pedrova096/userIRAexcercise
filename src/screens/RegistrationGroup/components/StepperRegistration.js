import React from 'react';
import {useRoute} from '@react-navigation/core';
import Stepper from 'src/common/components/Stepper';
import {
  CONTACT_INFORMATION,
  LOCATION_INFORMATION,
  PERSONAL_INFORMATION,
} from 'src/navigation/constants';

const STEPS = [
  {
    id: PERSONAL_INFORMATION,
    label: 'Personal Information',
  },
  {
    id: LOCATION_INFORMATION,
    label: 'Location Information',
  },
  {
    id: CONTACT_INFORMATION,
    label: 'Contact Information',
  },
];

const StepperRegistration = () => {
  const {name} = useRoute();
  const currentIndex = STEPS.findIndex(f => f.id === name);
  return <Stepper list={STEPS} index={currentIndex} />;
};

export default StepperRegistration;
