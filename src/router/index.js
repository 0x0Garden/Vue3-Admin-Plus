import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/default'

/**
 * asyncRoutes 异步路由
 */
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '系统首页',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Home/index'),
        meta: {
          title: '仪表盘',
          icon: 'el-icon-info',
          affix: true
        }
      }
    ]
  }
]

/**
 * constantRoutes 固定路由
 */
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/500'),
    hidden: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pathMatch',
    redirect: '/404',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
})

export default router
