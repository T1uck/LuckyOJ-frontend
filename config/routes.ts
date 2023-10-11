export default [
  { path: '/user',
    layout: false,
    routes: [
      { name: '登陆',path: '/user/login', component: './User/Login' },
      { name: '注册',path: '/user/register', component: './User/Register' },
    ],
  },
  // { name: '欢迎',path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/problemset/all',
    name: '题库',
    icon: 'profile',
    component: './Problem/ProblemSet'
  },
  {
    path: '/problemset',
    routes: [
      { name: '题目详情', path: '/problemset/:id', component: './Problem/ProblemDetail', hideInMenu: true},
    ],
  },
  // {
  //   path: '/user',
  //   routes: [
  //     {name: '账号设置', path: '/user/settings', component: './User/Settings'},
  //   ]
  // },
  {
    name: '管理页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin'
  },
  // { name:'表格',icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/problemset/all' },
  { path: '*', layout: false, component: './404' },
];
