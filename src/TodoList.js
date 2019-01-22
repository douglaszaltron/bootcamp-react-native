import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TodoList = ({ todos }) => {
  console.tron.log(todos);

  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <Text>{todo}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
