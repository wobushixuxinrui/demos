<template>
  <div>
    <a-button type="" @click="doSomeThing">点击触发</a-button>
    
    

    <pre>
      <code class="language-html line-numbers" >
        
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
  data(){
    return{

    }
  },
  methods:{
    doSomeThing(){
      // class Earth {
      //   constructor()
      // }
    }
  }
}
</script>

<style>

</style>