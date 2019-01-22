import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.light,
  },
  title: {
    color: colors.regular,
    fontSize: 14,
  },
  active: {
    color: colors.darker,
  },
});

export default styles;
