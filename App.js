import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screen/index';
import { Provider } from 'react-redux';
import configuerStore from './src/store/index';

const { store } = configuerStore(() => { });
// 执行注册页面方法
registerScreens(store, Provider);

// 启动app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'home',
      screen: 'home',
      title: '首页',
      icon: require('./src/assets/home.png')
    },
    {
      screen: 'popularize',
      title: '推广',
      icon: require('./src/assets/add.png'),
      iconInsets: {
        top: 5,
        left: 0,
        bottom: -5,
        right: 0
      }
    },
    {
      label: 'mine',
      screen: 'mine',
      title: '我',
      icon: require('./src/assets/mine.png')
    }
  ],
  appStyle: {
    navBarBackgroundColor: '#292f33', //顶部导航栏背景颜色
    navBarTextColor: 'white' //顶部导航栏字体颜色
  },
  tabsStyle: {
    tabBarButtonColor: '#ccc', //底部按钮颜色
    tabBarSelectedButtonColor: '#08cb6a', //底部按钮选择状态颜色
    tabBarBackgroundColor: '#E6E6E6' //顶部条背景颜色
  }
});
