import './config/ReactotronConfig';
import './config/ReactotronConfig';

import TodoList from '~/components/TodoList';

import React from 'react';

import {
  StyleSheet, View, Text, Platform,
} from 'react-native';

const bgColor = '#f5fcff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  text: {
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

const App = () => (
  <View style={styles.container}>
    {Platform.OS === 'ios' ? <Text style={styles.text}>iOS</Text> : <Text>Android</Text>}
    <TodoList />
  </View>
);

export default App;
