import React from 'react';
import {View} from 'react-native';
import LogoSvg from 'src/common/components/LogoSvg';
import Text from 'src/common/components/Text';
import {colors} from 'src/constants/theme';
import styles from './styles';
/***
 * @type {import("@react-navigation/native-stack").NativeStackNavigationOptions}
 */

const headerOptions = {
  headerShown: true,
  headerTitle: () => (
    <View style={styles.headerTitle}>
      <LogoSvg fill={colors.light} style={styles.headerTitleLogo} />
      <Text mode="bold" style={styles.headerTitleText}>
        {' '}
        User IRA
      </Text>
    </View>
  ),
  headerTitleAlign: 'center',
  headerStyle: {borderBottomWidth: 0},
  headerLeft: () => null,
  headerRight: () => null,
  cardStyle: {backgroundColor: colors.light},
  headerShadowVisible: false,
};

export const backgroundPrimary = {
  cardStyle: styles.backgroundPrimary,
  headerStyle: styles.backgroundPrimary,
};

export default headerOptions;
