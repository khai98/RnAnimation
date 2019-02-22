import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ScrollView
} from 'react-native';

let HEADER_MAX_HEIGHT = 100;
let HEADER_MIN_HEIGHT = 120;
let PROFILE_IMAGE_MAX_HEIGHT = 80;
let PROFILE_IMAGE_MIN_HEIGHT = 40;

export default  class AnimationEssing extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={style.container}>
        </View>
        <ScrollView style={{flex: 1}}>
          <View>
            <Image source={require('../../asset/icons8-male-user-50')}
            >
            </Image>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#81DAF5',
    height: HEADER_MAX_HEIGHT
  }
});