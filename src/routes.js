import {createBrowserRouter, Navigate} from 'react-router';
import Layout from './layout';
import Login from './pages/login';
import Login from './pages/login';
import Dashboard from './pages/dashboard/index.jsx'
import { hashrateRoute } from '@/pages/hashrateSystem/hashrateRoute'
import { carRoute } from '@/pages/carSystem/carRoute'
import { projectRoute } from '@/pages/projectSystem/projectRoute'
import { userRoute } from '@/pages/user/userRoute'
import {peopleRoute} from "@/pages/peopleSystem/peopleRoute.js";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
	  {
		path: 'home',
		Component: Dashboard,
		handle: {
		  hideMenuIcon: false,
		  hideSide: false,
		  system: 'home',
		  title: '首页',
		  icon: <HomeOutlinedIcon/>,
		  alias: 'home',
		  role: ['admin', 'root']
		},
	  },
	  ...hashrateRoute,
      ...projectRoute,
	  ...carRoute,
	  ...userRoute,
	  ...peopleRoute,
    ],
  },
  {
    path: '/login',
    Component: Login,
    handle: { hideMenuIcon: true, hideSide: true, system: 'origin', role: ['root', 'admin'], alias: 'login' },
  },
  {
    index: true,
    element: <Navigate to="/home" replace />,
  },
]);

export default routes;