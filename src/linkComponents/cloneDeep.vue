<template>
  <div>
    <a-button @click="todo" type="">触发</a-button> <br />
  </div>
</template>

<script>
import { off } from 'process';

export default {
  methods:{
    todo(){
      const obj = {
        id:1,
        color:'green',
        ar:[1,'aaa','null',false],
        ob:{
          qaz:'qaz',
          wsx:'wsx',
          car:['q','a','z'],
          cob:{
            rfv:'rfv'
          }
        }
      }
      function cloneDeep(source){
        const target  = Object.prototype.toString.call(source) === '[object Array]'? [] : {} // 应用
        for (const keys in source){
          if(source[keys] && typeof(source[keys]) === 'object' ){
            target[keys]  = Object.prototype.toString.call(source) === '[object Array]'? [] : {} // 容错
            target[keys] = cloneDeep(source[keys])
          }else {
            target[keys] = source[keys] //维护
          }
        }
        return target
      }
    }
  }
}
</script>

<style>

</style>