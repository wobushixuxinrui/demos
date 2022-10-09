<template>
  <div>
    <a-button type="" @click="todo">点击触发</a-button>


    'AAFEGDWDWQAAFEAAD'.replaceAll("A","B");
  </div>
</template>

<script>
export default {
  methods:{
    todo(){
      // 1、是否包含
      // 2、替换

      const reg = /^[\u4E00-\u9FA5]{2,4}$/

      reg.test('我不是') // true
      reg.test('我不是wobushi') // false

    }
  }
}
</script>

<style>

</style>