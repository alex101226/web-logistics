import CarRegister from './carManage'
import CarLogisticsRoute from './carLogisticsRoute'
import CarTraffic from './carTraffic'
import CarControl from './carControl'
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';

export const carRoute = [
  {
    path: 'car',
    // Component: CarRegister,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'car',
      title: '车辆管理',
      icon: <DriveEtaOutlinedIcon />,
      alias: 'carManage',
      role: ['admin', 'root']
    },
    children: [
      {
        path: 'manage',
        Component: CarRegister,
        handle: {
          hideMenuIcon: false,
          hideSide: false,
          system: 'car',
          title: '车辆管理',
          // icon: <DriveEtaOutlinedIcon />,
          alias: 'carManage',
          role: ['admin', 'root']
        },
      },
      {
        path: 'route',
        Component: CarLogisticsRoute,
        handle: {
          hideMenuIcon: false,
          hideSide: false,
          system: 'car',
          title: '路线管理',
          // icon: <AddRoadOutlinedIcon />,
          alias: 'carLogisticsRoute',
          role: ['admin', 'root']
        }
      },
      {
        path: 'control',
        Component: CarControl,
        handle: {
          hideMenuIcon: false,
          hideSide: false,
          system: 'car',
          title: '智能调度',
          // icon: <EditCalendarOutlinedIcon />,
          alias: 'carControl',
          role: ['admin', 'root']
        }
      },
      {
        path: 'traffic',
        Component: CarTraffic,
        handle: {
          hideMenuIcon: false,
          hideSide: false,
          system: 'car',
          title: '运输跟踪',
          // icon: <LocalShippingOutlinedIcon />,
          alias: 'carTraffic',
          role: ['admin', 'root']
        }
      },
    ]
  },
]