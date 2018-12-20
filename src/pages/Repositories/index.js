import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  View, Text, AsyncStorage, ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-ionicons';

import styles from './styles';

import Header from '~/components/Header';
import api from '~/services/api';

const TabIcon = ({ tintColor }) => <Icon name="list" size={26} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({ data, loading: false });
  }

  renderList = () => <Text>Lista</Text>;

  render() {
    const { loading } = this.state;

    return (
      <View>
        <Header title="Repositórios" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
