<template>
  <div>
    <a-button @click="base" type="">显示</a-button>
    <a-button @click="change" type="">修改</a-button> 
  </div>
</template>

<script>
export default {
  methods:{
    base(){
      // console.log(this.$store)
      // console.log(this.$store.state.user.userName)
      // console.log(this.$store.state.user.age)
    },
    change(){
     this.$store.commit('CHANGE_USER_AGE',10)
     console.log(this.$store)
    }
  }
}
</script>

<style>

</style>