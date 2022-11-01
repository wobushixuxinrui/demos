<template>
  <div>
    <a-button type="" @click="doSomeThing">点击触发</a-button>
    
    
    obj
    <pre>
      <code class="language-html line-numbers" >
        Object.is 同值相等
        Object.assign(target, source1, source2); 对象的合并 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
          会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

        实例.__proto__ = 构造函数

        Object.setPrototypeOf(要设置其原型的对象, 该对象的新原型（一个对象或 null）)   
          方法设置一个指定的对象的原型

        Object.getPrototypeOf() 方法返回指定对象的原型
        Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
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
      obj:{
        name:'shin',
        toString: ()=>{}
      }
    }
  },
  methods:{
    doSomeThing(){
      // for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。
      for (const i in this.obj){
        console.log('for in:', i)
      }
      // Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。
      console.log('Object.keys():',Object.keys(this.obj))
      
      // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）
      console.log('Object.getOwnPropertyNames():',Object.getOwnPropertyNames(this.obj))

      // Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。
      console.log('Object.getOwnPropertySymbols():',Object.getOwnPropertySymbols(this.obj))

      // Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。
      console.log('Reflect.ownKeys():',Reflect.ownKeys(this.obj))

      console.log(Object.getOwnPropertyDescriptor(this.obj,'toString'))


      
    }
  }
}
</script>

<style>

</style>