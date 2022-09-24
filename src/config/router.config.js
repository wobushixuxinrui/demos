
import Home from '@/views/Home.vue'


export const asyncRouterMap = [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    title: '关于',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/promise',
    name: 'Promise',
    title: 'Promise',
    component: () => import(/* webpackChunkName: "about" */ '@/components/promise.vue')
  },
  {
    path: '/Async',
    name: 'Async',
    title: 'Async',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Async.vue')
  },
  {
    path: '/CssQuestions',
    name: 'CssQuestions',
    title: '常见样式处理',
    component: () => import(/* webpackChunkName: "about" */ '@/components/css/CssQuestions.vue')
  },
  {
    path: '/commons',
    name: 'commons',
    title: '常见JS',
    component: () => import(/* webpackChunkName: "about" */ '@/components/js/commons.vue')
  }
]
