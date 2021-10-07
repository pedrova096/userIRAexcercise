import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: sizes.verticalSpacing,
  },
  cardTitle: {
    fontSize: sizes.fontSize.head4,
    marginBottom: sizes.verticalSpacing / 4,
  },
  cardContentContainer: {
    borderRadius: sizes.radius.m,
    backgroundColor: OpacityHex(colors.primary, 0.15),
    padding: sizes.verticalSpacing,
    paddingBottom: 0,
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: sizes.verticalSpacing,
  },
  cardContentLabel: {
    color: colors.gray,
  },
  // cardContentValue
});

export default styles;
