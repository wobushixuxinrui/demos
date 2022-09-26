<template>
  <div>
    <a-tabs  tab-position="left" size="small">
      <a-tab-pane key="1" tab="输入url后的操作">
        https： http和tcp之间加了一层  TSL/SSL安全层    <br />
        1、输入网址     <br />
        2、DNS解析    <br />
        3、建立tcp连接，（现在多是长链接）    <br />
        4、客户端发送HTPP请求    <br />
        5、服务器处理请求　    <br />
        6、服务器响应请求    <br />
        7、浏览器展示HTML    <br />
        8、浏览器发送请求获取其他在HTML中的资源。
      </a-tab-pane>
      <a-tab-pane key="2" tab="性能优化">
        1、减少请求     <br />
        2、资源压缩     <br />
        3、懒加载     <br />
        4、JS性能
      </a-tab-pane>
      <a-tab-pane key="3" tab="图片懒加载">
        <router-link to="/imgLazyLoad">demo</router-link>
      </a-tab-pane>
      
    </a-tabs>
  </div>
</template>

<script>

export default {
  components:{

  }
}
</script>

<style lang="scss" scoped>

</style>