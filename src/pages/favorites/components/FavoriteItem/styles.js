import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  title: {
    color: colors.dark,
    fontWeight: 'bold',
  },
  description: {
    color: colors.darker,
    marginTop: metrics.baseMargin / 4,
    fontSize: 12,
  },
});

export default styles;
