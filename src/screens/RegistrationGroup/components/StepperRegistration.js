import React from 'react';
import {useRoute} from '@react-navigation/core';
import Stepper from 'src/common/components/Stepper';
import {PERSONAL_INFORMATION} from 'src/navigation/constants';

const STEPS = [
  {
    id: PERSONAL_INFORMATION,
    label: 'Personal Information',
  },
  {
    id: '2',
    label: 'Location Information',
  },
  {
    id: '3',
    label: 'Contact Information',
  },
];

const StepperRegistration = () => {
  const {name} = useRoute();
  const currentIndex = STEPS.findIndex(f => f.id === name);
  return <Stepper list={STEPS} index={currentIndex} />;
};

export default StepperRegistration;
