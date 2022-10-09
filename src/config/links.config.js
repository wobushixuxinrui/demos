
const vues = [
  {
    path: '/components/vue/mixin',
    name: 'mixin',
    title: 'mixin混入',
    component: () => import('@/components/vue/mixin.vue')
  }
]


const writes = [
  {
    path: '/linkComponents/writeNew',
    name: 'writeNew',
    title: '手撕new',
    component: () => import('@/linkComponents/writeNew.vue')
  }
]


export const links = [
  {
    path: '/imgLazyLoad',
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
  
  ...vues,
  ...writes
]
