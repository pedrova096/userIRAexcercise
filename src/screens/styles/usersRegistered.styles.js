import {StyleSheet} from 'react-native';
import {colors, sizes} from 'src/constants/theme';
import {OpacityHex} from 'src/utility/stytlus';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    marginVertical: sizes.verticalSpacing,
  },
  listContentContainer: {
    paddingHorizontal: sizes.verticalSpacing,
  },
  itemContainer: {
    marginBottom: sizes.verticalSpacing,
    borderRadius: sizes.radius.m,
    backgroundColor: OpacityHex(colors.primary, 0.15),
    padding: sizes.verticalSpacing,
  },
  itemFullName: {
    fontSize: sizes.fontSize.head4,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    width: '100%',
    marginVertical: sizes.verticalSpacing / 2,
  },
  itemLabel: {
    fontSize: 12,
    color: colors.gray,
    marginTop: sizes.verticalSpacing / 2,
  },
  loaderContainer: {
    alignItems: 'center',
  },
  loaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.verticalSpacing,
  },
  loaderText: {
    color: colors.primary,
  },
});

export default styles;
