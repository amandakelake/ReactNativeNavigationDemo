import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as homeActions from '../../action/home';

type Props = {};
class NextPage extends Component<Props> {
  static navigatorStyle = {
    tabBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.test();
  }

  componentWillMount() {
    console.log('will-count', this.state.count)
  }

  componentDidMount() {
    console.log('Did-count', this.state.count)
  }

  test() {
    setTimeout(() => {
      this.setState({
        count: 1
      })
    }, 5000)
  }

  render() {
    console.log('render-count', this.state.count)
    return (
      <View style={styles.container}>
        <Text style={styles.btnText}>{this.state.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addBtn: {
    backgroundColor: '#08cb6a',
    marginVertical: 20,
    width: 200,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },
  commonText: {
    fontSize: 18
  }
});


export default NextPage;

// this.setState({
//   count: this.state.count + 1
// });
// this.setState({
//   count: this.state.count + 1
// });

// this.setState(preState => {
//   return {
//     count: preState.count + 1
//   };
// });
// this.setState(preState => {
//   return {
//     count: preState.count + 1
//   };
// });

// setTimeout(() => {
//   this.setState({
//     count: this.state.count + 1
//   });
//   this.setState({
//     count: this.state.count + 1
//   });
// }, 0);
