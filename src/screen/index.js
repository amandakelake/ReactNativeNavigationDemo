import { Navigation } from 'react-native-navigation';

import Home from './home/index';
import PopularizeHome from './popularize/index';
import MineHome from './mine/index';

// 注册所有的页面
export function registerScreens() {
  Navigation.registerComponent('home',() => Home);
  Navigation.registerComponent('popularize',() => PopularizeHome);
  Navigation.registerComponent('mine',() => MineHome);
}
