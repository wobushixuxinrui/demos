<template>
  <div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
    <div class="a"></div><div class="b"></div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  created(){
    // window.onscroll = this.scroll()
  },
  methods:{
    scroll(){
      const clientHeight = document.documentElement.clientHeight // 视窗高度
      const scrollTop = document.documentElement.scrollTop // 滚动条滚动距离
      console.log('clientHeight,scrollTop:',clientHeight, scrollTop)
    }
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.scroll)
  }

}
</script>

<style lang="scss" scoped>
.a{
  width: 300px;
  height: 200px;
  background-color: #ccc;
}
.b{
  width: 150px;
  height: 100px;
  background-color:#efefef ;
}
</style>