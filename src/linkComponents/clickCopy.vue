<template>
  <div>
    <a-button @click="handleCopy" type="">点击复制</a-button> 
    <pre>
      <code class="language-js line-numbers" >
        navigator.clipboard.writeText("tregetghfertgerghrthrthytjuyk").then(() => {
          this.$message.success("复制成功");
        });
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  mounted(){
    Prism.highlightAll()
  },
  methods: {
    handleCopy() {
      navigator.clipboard.writeText("tregetghfertgerghrthrthytjuyk").then(() => {
        this.$message.success("复制成功");
      });
    }
  }
    
}
</script>

<style lang="scss" scoped>

</style>