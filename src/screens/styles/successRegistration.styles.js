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
  itemContainer: {
    marginBottom: sizes.verticalSpacing,
  },
  itemTitle: {
    fontSize: sizes.fontSize.head4,
    marginBottom: sizes.verticalSpacing / 4,
  },
  itemContentContainer: {
    borderRadius: sizes.radius.m,
    backgroundColor: OpacityHex(colors.primary, 0.15),
    padding: sizes.verticalSpacing,
    paddingBottom: 0,
  },
  itemContent: {
    flexDirection: 'row',
    marginBottom: sizes.verticalSpacing,
  },
  itemContentLabel: {
    color: colors.gray,
  },
  registerButton: {
    marginBottom: sizes.verticalSpacing,
  },
  // itemContentValue
});

export default styles;
