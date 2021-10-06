import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
  },
  welcomeContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: sizes.verticalSpacing,
    paddingBottom: sizes.verticalSpacing * 2,
    marginBottom: sizes.verticalSpacing * 2,
    borderBottomStartRadius: sizes.radius.l,
    borderBottomEndRadius: sizes.radius.l,
  },
  welcome: {
    fontSize: sizes.fontSize.head1,
    lineHeight: sizes.fontSize.head1 * 1.25,
    color: colors.light,
  },
  welcome2: {
    fontSize: sizes.fontSize.head3,
  },
  registerButton: {
    marginBottom: sizes.verticalSpacing * 2,
  },
});

export default styles;
