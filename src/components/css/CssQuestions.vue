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

<style scoped>
.minisize{
  display: inline-block;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
}
</style>