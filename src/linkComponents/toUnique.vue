<template>
  <div>
    <a-button type="" @click="todo">点击触发</a-button> 

    <pre>
    <code class="language-js line-numbers" >
      // 去重原理： 
      // let currentValue = {id:1,text:'aa'} 
      // !{}[currentValue['ids']]  
      -------------------------
      -------------------------

      toUnique(arr,key,type){
        const hash = {}
        const result = arr.reduce((total, currentValue) => {

          if (!hash[currentValue[key]]) {
            
            hash[currentValue[key]] = true
            total.push(currentValue)
          }
          return total
        }, [])
        return result
      }
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
    todo(){
      const arr = [
        {id:1,text:'aa'},
        {id:1,text:'aaa'},
        {id:2,text:'aaaa'},
        {id:2,text:'aaaaa'},
        {id:1,text:'aaaaaa'},
        {id:3,text:'aaaaaaa'}
      ]
      console.log( this.toUnique(arr,'id') )
    },
    toUnique(arr,key,type){
      const hash = {}
      const result = arr.reduce((total, currentValue) => {

        if (!hash[currentValue[key]]) {
          
          hash[currentValue[key]] = true
          total.push(currentValue)
        }
        return total
      }, [])
      return result
    }
  }
}
</script>

<style>

</style>
