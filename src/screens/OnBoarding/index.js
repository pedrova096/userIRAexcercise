import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Text from 'src/common/components/Text';
import styles from './styles';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome} mode="bold">
          Welcome
        </Text>
        <Text style={[styles.welcome, styles.welcome2]} mode="bold">
          User IRA waits for you!
        </Text>
      </View>
      <Button fullWidth text="Register" style={styles.registerButton} />
      <Button fullWidth text="Go to Login" mode="outline" />
    </View>
  );
};

export default OnBoarding;
