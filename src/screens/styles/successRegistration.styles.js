import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: sizes.verticalSpacing,
    alignItems: 'center',
  },
  fullNameTitle: {
    marginVertical: sizes.verticalSpacing,
    fontSize: sizes.fontSize.head3,
  },
  fullName: {
    fontSize: sizes.fontSize.head2,
    color: colors.primary,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  registerButton: {
    marginBottom: sizes.verticalSpacing,
  },
});

export default styles;
