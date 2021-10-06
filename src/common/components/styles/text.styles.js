import {StyleSheet} from 'react-native';
import {isIOS} from 'src/constants/device';
import {colors} from 'src/constants/theme';

const styles = StyleSheet.create({
  base: {
    color: colors.dark,
    includeFontPadding: false,
    fontSize: 14,
  },
  center: {textAlign: 'center'},
  regular: {fontWeight: isIOS ? '400' : 'normal'},
  medium: {fontWeight: isIOS ? '500' : '700'},
  bold: {fontWeight: 'bold'},
});

export default styles;
