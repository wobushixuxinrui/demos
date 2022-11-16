<template>
  <div>
    <pre>
      <code class="language-js line-numbers">
        Object.freeze(data)
        // 不能添加新属性
        // 不能删除已有属性
        // 不能修改已有属性的可枚举性、可配置性、可写性
        // 不能修改已有属性的值
        // 不能修改原型
        // 属于浅冻结，复杂对象里面的对象仍然可以修改
        this.xxx = Object.freeze(data)
        

        1、首屏卡顿
        2、组件切换卡顿keep-alive
        3、动态缓存keep-alive includes="[]"
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  mounted(){
    Prism.highlightAll()
  }
}
</script>

<style>

</style>