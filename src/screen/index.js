import { Navigation } from 'react-native-navigation';

import Home from './home/index';
import PopularizeHome from './popularize/index';
import MineHome from './mine/index';
import NextPage from './home/nextPage'

// 注册所有的页面
export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => Home, store, Provider);
  Navigation.registerComponent('nextPage', () => NextPage, store, Provider);
  Navigation.registerComponent('popularize', () => PopularizeHome, store, Provider);
  Navigation.registerComponent('mine', () => MineHome, store, Provider);
}
