import React from 'react';
import PropTypes from 'prop-types';

import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons';

import styles from './styles';

const RepositorySearch = ({ search, onChangeText, handleSubmit }) => (
  <View style={styles.wrapper}>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholderTextColor={styles.placeholder.color}
      placeholder="Adicionar novo repositório"
      value={search}
      selectionColor={styles.selection.color}
      returnKeyType="done"
      onSubmitEditing={() => handleSubmit()}
      onChangeText={text => onChangeText(text)}
    />
    <TouchableOpacity onPress={() => handleSubmit()}>
      <Icon style={styles.icon} name="add" size={24} />
    </TouchableOpacity>
  </View>
);

RepositorySearch.propTypes = {
  search: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default RepositorySearch;
