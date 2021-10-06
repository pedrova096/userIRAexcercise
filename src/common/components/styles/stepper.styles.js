import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: sizes.verticalSpacing,
    backgroundColor: colors.primary,
    paddingBottom: sizes.verticalSpacing * 2,
    marginBottom: sizes.verticalSpacing * 2,
    borderBottomStartRadius: sizes.radius.l,
    borderBottomEndRadius: sizes.radius.l,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: sizes.verticalSpacing,
  },
  circleText: {
    color: colors.light,
    fontSize: sizes.fontSize.head4,
    position: 'absolute',
    letterSpacing: 4,
  },
  current: {
    color: colors.light,
    fontSize: sizes.fontSize.head3,
  },
  next: {
    color: OpacityHex(colors.light, 0.8),
    lineHeight: sizes.fontSize.head4 * 1.5,
    fontSize: sizes.fontSize.head4,
  },
});

export default styles;
