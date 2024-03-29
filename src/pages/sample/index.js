import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const PDF = React.lazy(() => import('./PDF'));
const CreatPDF = React.lazy(() => import('./PDF/creat-PDF'));
const Slot = React.lazy(() => import('./Slot'));
const SlotPostEdit = React.lazy(() => import('./Slot/SlotPostEdit'));
const House = React.lazy(() => import('./House'));
const HousePostEdit = React.lazy(() => import('./House/HousePostEdit'));
const Floor = React.lazy(() => import('./Floor'));
const FloorPostEdit = React.lazy(() => import('./Floor/FloorPostEdit'));
const Payment = React.lazy(() => import('./Payment Method'));
const PaymentPostEdit = React.lazy(() => import('./Payment Method/AppartmentPostEdit'));
const User = React.lazy(() => import('./User'));
const UserPostEdit = React.lazy(() => import('./User/UserPostEdit'));
const Course = React.lazy(() => import('./Course'));


export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/pdf',
    element: <PDF/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/pdf/creat',
    element: <CreatPDF/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/slot',
    element: <Slot/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/slot/add',
    element: <SlotPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/house',
    element: <House/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/house/add',
    element: <HousePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/floor',
    element: <Floor/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/floor/add',
    element: <FloorPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/payment',
    element: <Payment/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/payment/add',
    element: <PaymentPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/user',
    element: <User/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/user/add',
    element: <UserPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/course',
    element: <Course/>,
  },
];
