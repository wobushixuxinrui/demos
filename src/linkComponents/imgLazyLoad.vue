<template>
  <div>

  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />
  <img src="@/assets/logo.png" data-src="@/assets/hongrenwuAndweirenwu.png" alt="" />

  </div>
</template>

<script>
export default {
  created(){


    this.$nextTick(()=>{
      let num = document.getElementsByTagName('img').length;
      let img = document.getElementsByTagName("img");
      debugger
      let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

      lazyload(); //页面载入完毕加载可视区域内的图片

      window.onscroll = lazyload;

      function lazyload() { //监听页面滚动事件
        let seeHeight = document.documentElement.clientHeight; //可见区域高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
        for (let i = n; i < num; i++) {
          if (img[i].offsetTop < seeHeight + scrollTop) {
            if (img[i].getAttribute("src") == "@/assets/logo.png") {
              img[i].src = img[i].getAttribute("data-src");
            }
            n = i + 1;
          }
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
img {
      display: block;
      margin-bottom: 50px;
      width: 400px;
      height: 400px;
    }
</style>