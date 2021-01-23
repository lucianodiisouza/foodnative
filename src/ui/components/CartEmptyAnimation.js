import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
const emtpy = require('../../assets/empty.json');

export default class CartEmptyAnimation extends Component {
  render() {
    return (
      <LottieView
        source={emtpy}
        autoPlay
        loop
        style={{width: 250, height: 250}}
      />
    );
  }
}
