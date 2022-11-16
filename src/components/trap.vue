<template>
  <div>
    <pre>
      <code class="language-js line-numbers" >
        // 全局变量和据部变量同名后  全局变量不会作用于局部变量
        var a = 10
        
        function test(){
          var a
          console.log(a)
          a = 100
          console.log(this.a)
          console.log(a)
        }
        test()
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