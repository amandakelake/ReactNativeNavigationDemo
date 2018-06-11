import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../action/home';

let sibling = new RootSiblings(
  (
    <View
      style={{ top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'red' }}
    />
  )
);

type Props = {};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    };
    this.optimize = this.optimize.bind(this);
    this.navigateToNextPage = this.navigateToNextPage.bind(this);
    this.navigateToLayoutAnimation = this.navigateToLayoutAnimation.bind(this);
  }

  optimize() {
    requestAnimationFrame(this.navigateToNextPage)
  }

  navigateToNextPage() {
    let i = 0;
    for (i; i < 1000; i++) {
      this.setState({
        a: i
      })
      if (i === 999) {
        this.props.navigator.push({
          screen: 'nextPage',
          title: '下一页'
        });
      }
    }
  }

  navigateToLayoutAnimation() {
    this.props.navigator.push({
      screen: 'layoutAninationDemo',
      title: 'layoutAnination演示'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addBtn} onPress={this.navigateToNextPage}>
          <Text>大量计算操作 {this.state.a}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={this.navigateToLayoutAnimation}>
          <Text>LayoutAnimation</Text>
        </TouchableOpacity>
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
  cutBtn: {
    backgroundColor: 'red',
    width: 200,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  jumpBtn: {
    marginTop: 20,
    backgroundColor: '#E3a4d3',
    width: 200,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  }
});

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
