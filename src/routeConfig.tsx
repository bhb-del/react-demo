import { RouteConfig } from 'react-router-config';
import Home from './pages/Home';
import Board from './pages/Board';
import Wallet from "./pages/Wallet";

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
  }
]

export default routesConfig;