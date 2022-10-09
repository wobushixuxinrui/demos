<template>
  <div id="app">
    <Navs />


    <div class="left">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navs from '@/tools/navs.vue'
export default {
  components:{
    Navs
  },
  
}
</script>

<style lang="scss" scoped>
.left{
  margin: 12px 140px 12px 12px;
}
</style>
