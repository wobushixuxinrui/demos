<template>
  <div>
    <a-tabs  tab-position="left">
      <a-tab-pane key="1" tab="垂直居中">
        <DivCenter />
      </a-tab-pane>
      <a-tab-pane key="2" tab="rem/vw/vh">
        1、如果css里面没有设定html的font-size，则默认浏览器以1rem=16px来换算 <br />
        2、vw/vh :全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度   1vh=视窗高度的1%；1vw=视窗宽度的1% <br />
        3、百分比继承父级   vw/vh只和视窗有关
      </a-tab-pane>
      <a-tab-pane key="3" tab="文本缩小到12以下">
        <span class="minisize">我是不是很小？</span>
      </a-tab-pane>

      <a-tab-pane key="4" tab="左固定右自适应">
        <div class="futher">
          <div class="left">1、BFC盒子，左固定宽，右不设置宽</div>
          <div class="right">2、flex ，左固定，右100%</div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import DivCenter from '@/components/css/DivCenter.vue'
export default {
  components:{
    DivCenter
  }
}
</script>

<style lang="scss" scoped>
  // 文本缩小
.minisize{
  display: inline-block;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
}
// 左固定右自适应
.futher{
  width: 1000px;
  height: 200px;
  
  .left{
    float: left;
    width: 300px;
    height: 200px;
    background-color: #999;
  }
  .right{
    height: 200px;
    background-color: #ccc;
  }
}
</style>