<template>
  <div>
    <slot></slot>


    <slot name="wobushi"></slot>   
    <!---
      <a href="" slot="wobushi">第一种</a>
      <template v-slot:wobushi>第二种</template>
      <template #wobushi>#第三种</template>
    -->


    <slot data="作用域传给父"></slot>
    <!--
      <template v-slot="scope">
        {{ scope.data }}
      </template>
    -->

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>