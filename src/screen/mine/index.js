import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../action/home';

type Props = {};
class MineHome extends Component<Props> {
  
  render() {
    return (
      <View>
        <Text>initCount: {this.props.home.initCount}</Text>
      </View>
    );
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(MineHome);
