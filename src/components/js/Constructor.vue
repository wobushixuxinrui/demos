<template>
  <div>
    <a-button type="" @click="todu">触发</a-button>
    <pre>
      <code class="language-js line-numbers" >
        const MyCon = function (name){
          this.name = name
        } 
        const see = new MyCon


        //  constructor
        //  查看see源构造函数  打印构造函数MyCon里的内容
        //  白话文：查看实例see用的是那个构造函数
        console.log(see.constructor) 
        

        //  instanceof
        //  查看构造函数【例如MyCon】的扩展prototype    是否在某个实例【例如see】原型链上
        //  白话文：查看某个实例【例如see】 是否用的某个【MyCon】构造函数创建
        console.log(see instanceof MyCon)

        // 实例.__proto__ = 构造函数
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
  methods:{
    todu(){
      const MyCon = function (name){
        this.name = name
      } 
      const see = new MyCon


      //  constructor
      //  查看see源构造函数  打印构造函数MyCon里的内容
      //  白话文：查看实例see用的是那个构造函数
      console.log('see.constructor:',see.constructor) 
      

      // instanceof
      // 查看构造函数【例如MyCon】的扩展prototype    是否在某个实例【例如see】原型链上
      // 白话文：查看某个实例【例如see】 是否用的某个【MyCon】构造函数创建
      console.log('see instanceof MyCon:',see instanceof MyCon)

    }
  }
}
</script>

<style>

</style>