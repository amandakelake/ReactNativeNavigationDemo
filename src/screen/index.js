import { Navigation } from 'react-native-navigation';

import Home from './home/index';
import PopularizeHome from './popularize/index';
import MineHome from './mine/index';

// 注册所有的页面
export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => Home, store, Provider);
  Navigation.registerComponent('popularize', () => PopularizeHome, store, Provider);
  Navigation.registerComponent('mine', () => MineHome, store, Provider);
}
