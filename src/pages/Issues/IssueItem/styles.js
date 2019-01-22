import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: metrics.basePadding / 2,
    paddingRight: metrics.basePadding / 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  subtitle: {
    fontSize: 14,
    color: colors.regular,
  },
  icon: {
    color: colors.light,
  },
});

export default styles;
