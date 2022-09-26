<template>
  <div>
    <a-tabs  tab-position="left">
      <a-tab-pane key="1" tab="作用域和js执行顺序">
        <Commons />
      </a-tab-pane>
      
      
    </a-tabs>
  </div>
</template>

<script>
import Commons from '@/components/js/commons.vue'
export default {
  components:{
    Commons
  }
}
</script>

<style lang="scss" scoped>

</style>