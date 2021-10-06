import React from 'react';
import {View} from 'react-native';
import Arrow from 'src/common/components/Arrow';
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
  headerLeft: () => null,
  headerRight: () => null,
  headerBackVisible: false,
  contentStyle: styles.backgroundLight,
  headerShadowVisible: false,
  headerTintColor: colors.light,
};

export const backgroundPrimary = {
  headerStyle: styles.backgroundPrimary,
};

export const headerBack = {
  headerBackVisible: true,
};
export default headerOptions;
