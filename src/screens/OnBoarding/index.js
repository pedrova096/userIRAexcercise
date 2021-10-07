import React from 'react';
import {View} from 'react-native';
import Button from 'src/common/components/Button';
import Text from 'src/common/components/Text';
import {REGISTRATION_GROUP, USERS_REGISTERED} from 'src/navigation/constants';
import styles from './styles';

const OnBoarding = ({navigation}) => {
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
      <Button
        fullWidth
        text="Register"
        style={styles.registerButton}
        onPress={() => navigation.navigate(REGISTRATION_GROUP)}
      />
      <Button
        fullWidth
        text="Check registered users"
        mode="outline"
        onPress={() => navigation.navigate(USERS_REGISTERED)}
      />
    </View>
  );
};

export default OnBoarding;
