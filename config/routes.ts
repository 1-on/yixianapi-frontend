export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'}],
  },
  {path: '/', name: '主页', icon: 'smile', component: './Index'},
  {path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true},
  {
    path: '/Admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {name: '接口管理', icon: 'table', path: '/Admin/interface', component: './Admin/InterfaceInfo'},
    ],
  },

  // { path: '/', redirect: '/welcome' },
  {path: '*', layout: false, component: './404'},
];
