import {createBrowserRouter, Navigate} from 'react-router';
import Layout from './layout';
import Login from './pages/login';
import { hashrateRoute } from '@/pages/hashrateSystem/hashrateRoute'
import { carRoute } from '@/pages/carSystem/carRoute'
import { projectRoute } from '@/pages/projectSystem/projectRoute'
import { userRoute } from '@/pages/user/userRoute'
import {peopleRoute} from "@/pages/peopleSystem/peopleRoute.js";

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
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
    element: <Navigate to="/hashrate/dashboard" replace />,
  },
]);

export default routes;