import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as homeActions from '../../action/home';

type Props = {};
class NextPage extends Component<Props> {

  static navigatorStyle = {
    tabBarHidden: true,
  };

  componentDidMount() {
    console.log('props',this.props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>NextPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default NextPage
