/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

type Props = {

};

export default class App extends Component <Props> {

  constructor() {
    super();
    this.state = {
      marginTopAdmin: new Animated.Value(0),
    }
  }

  componentDidMount(): void {
    Animated.timing(
      this.state.marginTopAdmin,
      {
        duration: 400,
        toValue: 300,
        easing: Easing.linear
      }
    )
  }

  render() {
    const { marginTopAdmin } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View>
          <Text style={styles.AnimatedView}>AnimatedView</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  AnimatedView: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: marginTopAdmin,
  },
});
