<template>
  <div>
    <a-button type="" @click="todu">触发</a-button>
    
    <pre>
      <code class="language-js line-numbers" >
        原型链:就是实例对象对象和原型对象之间的链接,每一个对象都有原型,原型本身又是对象,原型又有原型,以此类推形成一个链式结构.称为原型链

        ----------------------------------------
        ----------------------------------------
        ----------------------------------------

        const MyCon = function (name){
          this.name = name
        } 
        const see = new MyCon

        //  constructor
        //  查看see源构造函数  打印构造函数MyCon里的内容
        //  白话文：查看实例对象see用的是那个构造函数
        console.log(see.constructor) 
        

        //  instanceof
        //  查看构造函数【例如MyCon】的扩展prototype    是否在某个实例对象【例如see】原型链上
        //  白话文：查看某个实例对象【例如see】 是否用的某个【MyCon】构造函数创建
        console.log(see instanceof MyCon)

        // 实例对象.__proto__ = 构造函数的属性

        ----------------------------------------
        ----------------------------------------
        ----------------------------------------
        
        构造函数四个方法详解
        function Color(type){
          this.type = type,
          this.todo = function (){
            console.log(this.type)
          }
        }
        Color.prototype.shin = function(){
          console.log('shin是构造函数Color里面的原型对象')
        }
        const shili = new Color('sad')
        
        // prototype 构造函数的属性【原型对象】
        // __proto__ 实例对象用到的属性【原型对象】
        // constructor 属性【原型对象】所属的构造函数
        // instanceof 实例对象所属的构造函数
        
        console.log('Color.prototype:',Color.prototype)
        console.log('shili.__proto__:',shili.__proto__) 
        
        console.log('Color.prototype.constructor:',Color.prototype.constructor)
        console.log('shili.__proto__.constructor:',shili.__proto__.constructor)

        console.log(shili instanceof Color)
      </code>
    </pre>
    <img src="@/assets/yuanxinlian.png" alt="" />
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
      //  白话文：查看实例对象see用的是那个构造函数
      console.log('see.constructor:',see.constructor) 
      

      // instanceof
      // 查看构造函数【例如MyCon】的扩展prototype    是否在某个实例对象【例如see】原型链上
      // 白话文：查看某个实例对象【例如see】 是否用的某个【MyCon】构造函数创建
      console.log('see instanceof MyCon:',see instanceof MyCon)

    }
  }
}
</script>

<style>

</style>