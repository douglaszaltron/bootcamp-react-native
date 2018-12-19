import React, { Component } from "react";

import { StyleSheet, View, Button, Text } from "react-native";

export default class App extends Component {
  state = {
    text: "",
    counter: 0
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ text: "Hello World" });
    // }, 3000);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCounter} title="Add" />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
