import React, { Component } from 'react';

import {
  View, Text, ActivityIndicator, Alert, FlatList,
} from 'react-native';

import api from '~/services/api';
import IssueItem from './IssueItem';
import IssueSegmented from './IssueSegmented';
import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  state = {
    items: [],
    segmented: 'all',
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { segmented } = this.state;

    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${segmented}`,
      );

      this.setState({ items: data });
    } catch (error) {
      Alert.alert('Ops!', 'Erro ao recuperar as Issues');
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  onChangeSegmented = async (value) => {
    this.setState({ segmented: value });
    this.setState({ refreshing: true });

    const { navigation } = this.props;

    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${value}`,
      );

      this.setState({ items: data });
    } catch (error) {
      Alert.alert('Ops!', 'Erro ao recuperar as Issues');
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { items, refreshing } = this.state;

    if (!items.length) {
      return <Text style={styles.empty}>Nenhuma issue encontrada</Text>;
    }

    return (
      <FlatList
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, segmented } = this.state;

    return (
      <View style={styles.container}>
        <IssueSegmented segmented={segmented} onChangeSegmented={this.onChangeSegmented} />
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
