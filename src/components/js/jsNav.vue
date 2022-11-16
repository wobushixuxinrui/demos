<template>
  <div>
    <a-tabs  tab-position="left">
      <a-tab-pane key="1" tab="作用域和js执行顺序">
        <Commons />
      </a-tab-pane>
      <a-tab-pane key="2" tab="CallApplyBind">
        <CallApply />
      </a-tab-pane>
      <a-tab-pane key="3" tab="原型链">
        <Constructor />
      </a-tab-pane>
      <a-tab-pane key="4" tab="数组">
        <Arrays />
      </a-tab-pane>
      <a-tab-pane key="5" tab="Class">
        <Classs />
      </a-tab-pane>
      <a-tab-pane key="6" tab="Object">
        <Object />
      </a-tab-pane>
      <a-tab-pane key="7" tab="this指向">
        <Mythis />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Mythis from  '@/components/js/Mythis.vue'
import Object from  '@/components/js/Object.vue'
import Classs from  '@/components/js/Class.vue'
import Constructor from '@/components/js/Constructor.vue'
import Commons from '@/components/js/commons.vue'
import CallApply from '@/components/js/callApply.vue'
import Arrays from '@/components/js/Arrays.vue'

export default {
  components:{
    Mythis,
    Object,
    Classs,
    CallApply,
    Commons,
    Constructor,
    Arrays
  }
}
</script>

<style lang="scss" scoped>

</style>