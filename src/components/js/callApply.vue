<template>
  <div>
    <a-button type="" @click="doSomeThing">点击触发</a-button>

    <a-button type="" @click="doRightCall">手写call</a-button>

    <pre>
      <code class="language-js line-numbers" >
        let dog = {
          name:'我不是狗',
          eat(food){
            console.log('我偶尔吃' + food)
          }
        }
        let cat = {
          name:'我原来是狗，，我用call变成了猫'
        }

        
        -------------------------------------
        dog.eat.call(cat, '鱼','虾')
        -------------------------------------

        死亡总结：

        cat拿到了dog.eat方法
        cat增加了dog.eat方法
        cat继承了dog.eat

        dog.eat既然已经在cat里
        那么这个时候
        dog.eat对象的this指向它当前的爸爸：cat

        
      </code>
    </pre>

    
  </div>
</template>

<script>
import Prism from "prismjs";
import { start, rightCall,rightCallFull }  from './callApplyJs'
export default {
  mounted(){
    Prism.highlightAll()
  },
  methods:{
    doSomeThing() {
      start()
    },
    doRightCall(){
      rightCall()
    },
    doRightCallFull(){
      rightCallFull()
    }
  }
}
</script>

<style>

</style>