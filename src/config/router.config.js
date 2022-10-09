
import Home from '@/views/Home.vue'


export const asyncRouterMap = [
  {
    path: '/',
    name: 'Home',
    title: '测试专用页面',
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
    title: 'Async&Await',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Async.vue')
  },
  {
    path: '/CssQuestions',
    name: 'CssQuestions',
    title: '常见css处理',
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
  },
  {
    path: '/components/vue/futherSlot',
    name: 'futherSlot',
    title: 'Slot插槽',
    component: () => import(/* webpackChunkName: "about" */ '@/components/vue/futherSlot.vue')
  },
  
  {
    path: '/dictionary',
    name: 'dictionary',
    title: '功能字典',
    component: () => import(/* webpackChunkName: "about" */ '@/components/dictionary.vue')
  },
  {
    path: '/components/vues',
    name: 'vues',
    title: '常见vue',
    component: () => import(/* webpackChunkName: "about" */ '@/components/vues.vue')
  },
  {
    path: '/components/Handwrite',
    name: 'Handwrite',
    title: '手撕大全',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Handwrite.vue')
  }
]
