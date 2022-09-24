<template>
  <div class="main">

    <span v-for="(item,index) in asyncRouterMap" :key="index">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </span>
  </div>
</template>

<script>
import { asyncRouterMap } from '@/config/router.config'
export default {
  data(){
    return{
      asyncRouterMap
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss" scoped>
.main{
  z-index: 9999;
  background-color: rgb(247, 247, 247);
  width: 200px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 12px;
  span{
    margin-bottom: 6px;
    display: block;
  }
}
</style>