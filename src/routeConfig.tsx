import { RouteConfig } from 'react-router-config';
import Home from './pages/Home';
import Board from './pages/Board';
import Wallet from "./pages/Wallet";
import PubSub from './pages/PubSub';
// import Hook from "./pages/Hook";
const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/Board',
    exact: false,
    component: Board
  },
  {
    path: '/Wallet',
    exact: false,
    component: Wallet,
  },
  {
    path: '/PubSub',
    exact: false,
    component: PubSub,
  },
  // {
  //   path: '/Hook',
  //   exact: false,
  //   component: Hook,
  // }
]

export default routesConfig;