import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../action/home';

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Text>initCount: {this.props.home.initCount}</Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            this.props.homeActions.homeAdd({
              initCount: this.props.home.initCount + 2
            });
          }}
        >
          <Text style={styles.btnText}>加2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cutBtn}
          onPress={() => {
            this.props.homeActions.homeCut({
              initCount: this.props.home.initCount - 2
            });
          }}
        >
          <Text style={styles.btnText}>减2</Text>
        </TouchableOpacity>
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
  },
  addBtn: {
    backgroundColor: 'green',
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
