import React, { Component } from 'react';
import { Text, View } from 'react-native';


type Props = {};
export default class PopularizeHome extends Component<Props> {
  static navigatorStyle = {
    // tabBarHidden: true,
  };

  render() {
    return (
      <View>
        <Text>PopularizeHome</Text>
      </View>
    );
  }
}