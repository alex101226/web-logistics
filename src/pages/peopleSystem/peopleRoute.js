import PeoplePosition from './peoplePosition';
// import PeopleTraffic from './PeopleTraffic';
// import PeopleSos from './peopleSos';
// import PeopleWarn from './peopleWarn';
// import PeopleCount from './peopleCount';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
// import SosOutlinedIcon from '@mui/icons-material/SosOutlined';
// import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
// import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
// import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';

import HashrateUserManage from '@/pages/hashrateSystem/hashrateUserManage'


export const peopleRoute = [
  {
    path: 'user',
    Component: HashrateUserManage,
    handle: {
      hideMenuIcon: false,
      hideSide: false,
      system: 'people',
      title: '用户管理',
      icon: <PersonOutlineOutlinedIcon />,
      role: ['admin', 'root']
    },
  },
  // {
  //   path: '/people-traffic',
  //   Component: PeopleTraffic,
  //   handle: {
  //     hideMenuIcon: false,
  //     hideSide: false,
  //     system: 'people',
  //     title: '人员追踪',
  //     icon: <RadarOutlinedIcon />,
  //     role: ['admin', 'root']
  //   }
  // },
  // {
  //   path: '/people-sos',
  //   Component: PeopleSos,
  //   handle: {
  //     hideMenuIcon: false,
  //     hideSide: false,
  //     system: 'people',
  //     title: 'sos告警',
  //     icon: <SosOutlinedIcon />,
  //     role: ['admin', 'root']
  //   }
  // },
  // {
  //   path: '/people-warn',
  //   Component: PeopleWarn,
  //   handle: {
  //     hideMenuIcon: false,
  //     hideSide: false,
  //     system: 'people',
  //     title: '电子围栏',
  //     icon: <BiotechOutlinedIcon />,
  //     role: ['admin', 'root']
  //   }
  // },
  // {
  //   path: '/people-count',
  //   Component: PeopleCount,
  //   handle: {
  //     hideMenuIcon: false,
  //     hideSide: false,
  //     system: 'people',
  //     title: '区域等级和人员统计',
  //     icon: <AutoGraphOutlinedIcon />,
  //     role: ['admin', 'root']
  //   }
  // },
]