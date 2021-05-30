export default {
  path: '/',
  component: () => import('./App'),
  children: [
    {
      name: 'index.login',
      path: '/login',
      component: () => import('./pages/MainLayout')
    }
  ]
}
