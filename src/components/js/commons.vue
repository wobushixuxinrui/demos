<template>
  <div>
    <a-button @click="letConst" type="">作用域和js执行顺序</a-button> 
  </div>
</template>

<script>
export default {
  created(){
  },
  methods:{
    // 作用域和js执行顺序
    letConst(){
      for (var i = 1 ; i<10 ; i++){
        setTimeout(()=>{
          console.log(i)
        })
      }
      for (let j = 1 ; j<10 ; j++){
        setTimeout(()=>{
          console.log(j)
        })
      }
      console.log(i)
      // console.log(j) // 报错
    },
    
  }
}
</script>

<style>

</style>