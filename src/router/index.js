import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/system',
    children: [
      {
        path: 'system',
        name: 'system',
        component: () => import('@/views/system/index.vue')
      },
      {
        path: 'images',
        name: 'images',
        component: () => import('@/views/images/index.vue')
      },
      {
        path: 'container',
        name: 'container',
        component: () => import('@/views/container/index.vue')
      },
      {
        path: 'storage',
        name: 'storage',
        component: () => import('@/views/storage/index.vue')
      },
      {
        path: 'network',
        name: 'network',
        component: () => import('@/views/network/index.vue')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/setting/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
