
const vues = [
  {
    path: '/components/vue/mixin',
    name: 'mixin',
    title: 'mixin混入',
    component: () => import('@/components/vue/mixin.vue')
  },
  {
    path: '/components/vue/vueOptimization',
    name: 'vueOptimization',
    title: 'vue优化',
    component: () => import('@/components/vue/vueOptimization.vue')
  },
  {
    path: '/components/vue/vueDirective',
    name: 'vueDirective',
    title: 'vue自定义指令',
    component: () => import('@/components/vue/vueDirective.vue')
  }
]


const writes = [
  {
    path: '/linkComponents/writeNew',
    name: 'writeNew',
    title: '手撕new',
    component: () => import('@/linkComponents/writeNew.vue')
  },
  {
    path: '/linkComponents/writePromise',
    name: 'writePromise',
    title: '手撕promise',
    component: () => import('@/linkComponents/writePromise.vue')
  }
]


export const links = [
  {
    path: '/linkComponents/imgLazyLoad',
    name: 'imgLazyLoad',
    title: '图片懒加载',
    component: () => import('@/linkComponents/imgLazyLoad.vue')
  },
  {
    path: '/linkComponents/clickCopy',
    name: 'clickCopy',
    title: '点击复制',
    component: () => import('@/linkComponents/clickCopy.vue')
  },
  {
    path: '/linkComponents/preEdit',
    name: 'preEdit',
    title: '在线代码显示',
    component: () => import('@/linkComponents/preEdit.vue')
  },
  {
    path: '/linkComponents/reg',
    name: 'reg',
    title: '正则仓库',
    component: () => import('@/linkComponents/reg.vue')
  },
  {
    path: '/linkComponents/toUnique',
    name: 'toUnique',
    title: '数组去重',
    component: () => import('@/linkComponents/toUnique.vue')
  },
  {
    path: '/linkComponents/arrayEngine',
    name: 'arrayEngine',
    title: '数组查出现次数',
    component: () => import('@/linkComponents/arrayEngine.vue')
  },
  {
    path: '/linkComponents/cloneDeep',
    name: 'cloneDeep',
    title: '深拷贝',
    component: () => import('@/linkComponents/cloneDeep.vue')
  },
  {
    path: '/linkComponents/lazyScroll',
    name: 'lazyScroll',
    title: '下拉加载',
    component: () => import('@/linkComponents/lazyScroll.vue')
  },
  
  ...vues,
  ...writes
]
