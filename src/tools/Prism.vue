<template>
  <pre>
    <code class="language-js line-numbers" >
      {{ content }}
    </code>
  </pre>
  
</template>

<script>

import Prism from "prismjs";
export default {
  props:{
    content:{
      type:[String,Number],
      default:``
    }
  },
  mounted(){
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
pre[class*="language-"].line-numbers{
  padding-left: 2rem;
}
</style>