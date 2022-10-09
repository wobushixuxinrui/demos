<template>
  <div>
    <a-tabs  tab-position="left">
      <a-tab-pane key="1" tab="作用域和js执行顺序">
        <Commons />
      </a-tab-pane>
      <a-tab-pane key="2" tab="CallApplyBind">
        <CallApply />
      </a-tab-pane>
      <a-tab-pane key="3" tab="构造函数">
        <Constructor />
      </a-tab-pane>
      
    </a-tabs>
  </div>
</template>

<script>
  
  import Constructor from '@/components/js/Constructor.vue'
import Commons from '@/components/js/commons.vue'
import CallApply from '@/components/js/callApply.vue'
export default {
  components:{
    CallApply,
    Commons,
    Constructor
  }
}
</script>

<style lang="scss" scoped>

</style>