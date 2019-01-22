import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: metrics.baseMargin * 2,
    color: colors.primary,
  },
  empty: {
    textAlign: 'center',
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
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
