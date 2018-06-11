import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

const config = {
  duration: 500, // 动画时间
  create: {
  // spring,linear,easeInEaseOut,easeIn,easeOut,keyboard
    type: LayoutAnimation.Types.linear,
  // opacity,scaleXY 透明度，位移
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
  // 更新时显示的动画
    type: LayoutAnimation.Types.easeInEaseOut,
  }
};

class LayoutAnimationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [0, 1, 2 ,3, 4],
      viewWidth: 100,
      viewHeight: 100
    }
    this.addView = this.addView.bind(this);
    this.deleteView = this.deleteView.bind(this);
    this.largen = this.largen.bind(this);
    this.diminish = this.diminish.bind(this);
  }

  componentWillUpdate() {
    // spring, easeInEaseOut, linear
    // LayoutAnimation.linear();
    // LayoutAnimation.configureNext(config)
  }

  addView() {
    LayoutAnimation.spring();
    let temp = this.state.arr;
    temp.push(temp.length);
    this.setState({
      arr: temp
    })
  }

  deleteView() {
    LayoutAnimation.spring();
    let temp = this.state.arr;
    temp.pop();
    this.setState({
      arr: temp
    })
  }

  largen() {
    LayoutAnimation.spring();
    this.setState({
      viewWidth: this.state.viewWidth + 20,
      viewHeight: this.state.viewHeight + 20
    })
  }

  diminish() {
    LayoutAnimation.spring();
    this.setState({
      viewWidth: this.state.viewWidth - 20,
      viewHeight: this.state.viewHeight - 20
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btn, styles.btnGreen]} onPress={this.addView}><Text style={styles.textcolor}>add view</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnRed]} onPress={this.deleteView}><Text style={styles.textcolor}>delete view</Text></TouchableOpacity>
        </View>

        <View style={styles.blockContainer}>
          {this.state.arr.map((item, index) => {
            return (
              <View style={styles.block} key={index} />
            );
          })}
        </View>
        
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btn, styles.btnGreen]} onPress={this.largen}><Text style={styles.textcolor}>largen view</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnRed]} onPress={this.diminish}><Text style={styles.textcolor}>diminish view</Text></TouchableOpacity>
        </View>
        
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: this.state.viewWidth,
            height: this.state.viewHeight,
            backgroundColor: 'red',
            borderRadius: 5,
          }} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    flex: 1,
  },
  btnContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    width: 100,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcolor: {
    color: 'white'
  },
  btnGreen: {
    backgroundColor: '#08cb6a'
  },
  btnRed: {
    backgroundColor: 'red'
  },
  btnBlue: {
    backgroundColor: 'blue'
  },
  blockContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20
  },
  block: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 5
  },
});


export default LayoutAnimationDemo;