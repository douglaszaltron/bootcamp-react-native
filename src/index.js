import './config/ReactotronConfig';
import './config/ReactotronConfig';

import TodoList from '~/components/TodoList';

import React from 'react';

import { StyleSheet, View } from 'react-native';

const bgColor = '#f5fcff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: bgColor,
  },
});

const App = () => (
  <View style={styles.container}>
    <TodoList />
  </View>
);

export default App;
