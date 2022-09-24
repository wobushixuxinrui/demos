<template>
  <div id="app">
    <Navs />
      <!-- <router-link to="/about">About</router-link> -->

    <router-view/>
  </div>
</template>
<script>
import Navs from '@/tools/navs.vue'
export default {
  components:{
    Navs
  }
}
</script>

<style lang="scss" scoped>

</style>
