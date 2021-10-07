import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {width} from 'src/constants/device';
import {OpacityHex} from 'src/utility/stytlus';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: '4%',
    justifyContent: 'center',
    borderRadius: sizes.radius.s,
    borderWidth: 2,
    borderColor: 'transparent',
    flexDirection: 'row',
  },
  buttonFilled: {
    backgroundColor: colors.primary,
  },
  buttonSimple: {
    backgroundColor: colors.light,
    padding: 0,
  },
  buttonOutline: {
    borderColor: colors.dark,
    backgroundColor: colors.light,
  },
  textWhite: {
    color: OpacityHex(colors.light, 0.9),
  },
  textPrimary: {
    color: colors.primary,
  },
  textSecondary: {},
  textAnchor: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  disabled: {
    backgroundColor: colors.lightGray,
  },
  text: {
    textAlign: 'center',
    fontSize: sizes.fontSize.head4,
    letterSpacing: 1.1,
  },
  disabledText: {
    color: colors.gray,
    // color: colors.secondary_75,
  },
  loader: {
    position: 'absolute',
    right: sizes.verticalSpacing,
  },
  fullWidth: {
    width: width - sizes.verticalSpacing * 2,
  },
  leftMode: {
    justifyContent: 'flex-start',
  },
  buttonFullSimple: {
    backgroundColor: 'transparent',
  },
});

export default styles;
