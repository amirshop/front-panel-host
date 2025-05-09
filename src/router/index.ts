import { createRouter, createWebHistory } from 'vue-router'
// import permissionRoutes from 'remotePermissions/PermissionRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'TheApp',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: 'permission',
          name: 'PermissionWrapper',
          component: ()=> import('@/views/ThePermissionView.vue')
        },
        {
          path: '',
          name: 'ThePanel',
          component: () => import('@/layouts/PanelLayout.vue'),
          children: [],
        },
        {
          path: 'auth',
          name: 'TheAuth',
          component: () => import('@/layouts/AuthLayout.vue'),
          children: [
            {
              path: 'login',
              name: 'TheAuthLogin',
              component: () => import('@/views/auth/TheLogin.vue'),
            },
            {
              path: 'forget',
              name: 'TheAuthForget',
              component: () => import('@/views/auth/TheLogin.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router
