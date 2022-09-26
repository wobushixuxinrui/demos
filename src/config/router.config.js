
import Home from '@/views/Home.vue'


export const asyncRouterMap = [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    component: Home
  },
  {
    path: '/CommonQA',
    name: 'CommonQA',
    title: '常见问答',
    component: () => import(/* webpackChunkName: "about" */ '@/components/CommonQA.vue')
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
    path: '/jsNav',
    name: 'jsNav',
    title: '常见JS',
    component: () => import(/* webpackChunkName: "about" */ '@/components/js/jsNav.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    title: 'vuex',
    component: () => import(/* webpackChunkName: "about" */ '@/components/vue/vuex.vue')
  }
]
