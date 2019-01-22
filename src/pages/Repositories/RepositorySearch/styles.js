import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.light,
  },
  placeholder: {
    color: colors.regular,
  },
  selection: {
    color: colors.primary,
  },
  icon: {
    marginLeft: metrics.baseMargin * 2,
    alignItems: 'center',
  },
  divider: {
    height: 0,
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
});

export default styles;
