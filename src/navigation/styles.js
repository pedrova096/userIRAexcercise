import {StyleSheet} from 'react-native';
import {colors} from 'src/constants/theme';

const styles = StyleSheet.create({
  backgroundPrimary: {backgroundColor: colors.primary},
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {fontSize: 20, color: colors.light},
  headerTitleLogo: {width: 20},
  backgroundLight: {backgroundColor: colors.light},
});

export default styles;
