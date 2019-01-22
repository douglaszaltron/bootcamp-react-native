import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Filter = ({ segmented, onChangeSegmented }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.wrapper} onPress={() => onChangeSegmented('all')}>
      <Text style={[styles.title, segmented === 'all' && styles.active]}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wrapper} onPress={() => onChangeSegmented('open')}>
      <Text style={[styles.title, segmented === 'open' && styles.active]}>Abertas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.wrapper} onPress={() => onChangeSegmented('closed')}>
      <Text style={[styles.title, segmented === 'closed' && styles.active]}>Fechadas</Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  segmented: PropTypes.string.isRequired,
  onChangeSegmented: PropTypes.func.isRequired,
};

export default Filter;
