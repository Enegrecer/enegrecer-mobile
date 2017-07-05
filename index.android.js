/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Onboarding from './onboarding';
import { AppRegistry } from 'react-native';

export default class enegrecer extends Component {
  render() {
    return (
      <Onboarding/>
    );
  }
}

AppRegistry.registerComponent('enegrecer', () => enegrecer);
