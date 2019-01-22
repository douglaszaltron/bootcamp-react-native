import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-ionicons';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(issue.html_url)}>
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.wrapper}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text style={styles.subtitle}>{issue.user.login}</Text>
    </View>
    <Icon style={styles.icon} name="ios-arrow-forward" size={16} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    html_url: PropTypes.string,
  }).isRequired,
};

export default withNavigation(IssueItem);
