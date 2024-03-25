import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';



// const Dashboard = React.lazy(() => import('./Dashboard'));
// const Order = React.lazy(() => import('./Order'));

const PDF = React.lazy(() => import('./PDF'));


export const samplePagesConfigs = [


  {
    permittedRole: RoutePermittedRole.user,
    path: '/pdf',
    element: <PDF/>,
  },

];
