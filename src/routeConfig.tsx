import { RouteConfig } from 'react-router-config';
import Home from './pages/Home';
import Board from './pages/Board';
import Square from "./pages/Square";

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
    path: '/Square',
    exact:false,
    component:Square
  }
]

export default routesConfig;