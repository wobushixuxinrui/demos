import Vue from 'vue'
import VueRouter from 'vue-router'
import { asyncRouterMap } from '@/config/router.config' // 显示到右侧菜单上
import { links } from '@/config/links.config' // 不显示到菜单上

const routes = [...asyncRouterMap,...links]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
