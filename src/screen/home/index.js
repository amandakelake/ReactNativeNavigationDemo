import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../action/home';

let sibling = new RootSiblings(<View
  style={{top: 0,right: 0,bottom: 0,left: 0,backgroundColor: 'red'}}
/>);

type Props = {};

const obj = { num: 1 };
class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      b: null
    }
  }

  componentWillMount() {
    this.setState({
      b: obj
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.b !== this.state.b
  }

  render() {
    console.log('重新渲染   re-render------------------');
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addBtn} onPress={() => {
          obj.num++;
          this.setState({
            b: obj
          })
        }}>
          <Text>{this.state.b.num}</Text>
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
