import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';

const paddingHorizontal = sizes.verticalSpacing / 2;
const inputPaddingTop = 18;

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  margin: {
    marginBottom: 34,
  },
  label: {
    left: paddingHorizontal,
    letterSpacing: 0.5,
    fontSize: 14,
    lineHeight: 28,
    color: colors.gray,
  },
  input: {
    paddingHorizontal,
    minHeight: sizes.inputHeight,
    fontSize: 16,
    color: colors.dark,
    borderColor: OpacityHex(colors.gray, 0.4),
    borderRadius: sizes.radius.s,
    paddingBottom: 0,
    borderWidth: 1,
  },
  helpText: {
    left: paddingHorizontal,
    position: 'absolute',
    bottom: -20,
    fontSize: 14,
  },
  errorText: {
    color: colors.error,
  },
  labelFocus: {
    color: colors.secondary,
  },
  inputFocus: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: OpacityHex(colors.secondary, 0.05),
  },
});
