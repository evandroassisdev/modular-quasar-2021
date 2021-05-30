export default {
  path: '/',
  component: () => import('./App'),
  children: [
    {
      name: 'index.dash',
      path: '/',
      meta: { auth: true },
      component: () => import('./pages/MainLayout')
    }
  ]
}
