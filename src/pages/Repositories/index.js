import React, { Component } from 'react';
import {
  View, AsyncStorage, ActivityIndicator, FlatList, Alert, Text,
} from 'react-native';

import api from '~/services/api';
import RepositoryItem from './RepositoryItem';
import RepositorySearch from './RepositorySearch';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    items: [],
    search: '',
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const items = JSON.parse(await AsyncStorage.getItem('@GitIssues:items'));
    this.setState({ items: items || [], refreshing: false, loading: false });
  };

  onChangeText = (value) => {
    this.setState({ search: value });
  };

  handleSubmit = async () => {
    const { search, items } = this.state;
    this.setState({ loading: true });

    if (!search) {
      Alert.alert('Ops!', 'Preencha o repositório para continuar');
      this.setState({ loading: false });
      return;
    }

    if (items.find(item => item.full_name === search)) {
      Alert.alert('Ops!', 'Repositório duplicado');
      this.setState({ loading: false });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${search}`);
      this.setState({ search: '', items: [...items, data] });
      await AsyncStorage.setItem('@GitIssues:items', JSON.stringify([...items, data]));
    } catch (error) {
      Alert.alert('Ops!', 'Repositório inexistente');
    } finally {
      this.setState({ loading: false });
    }
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { items, refreshing } = this.state;

    if (!items.length) {
      return <Text style={styles.empty}>Nenhum repositório adicionado</Text>;
    }

    return (
      <FlatList
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { search, loading } = this.state;

    return (
      <View style={styles.container}>
        <RepositorySearch
          search={search}
          onChangeText={this.onChangeText}
          handleSubmit={this.handleSubmit}
        />
        <View style={styles.divider} />
        {loading ? (
          <ActivityIndicator size="large" color={styles.loading.color} style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
