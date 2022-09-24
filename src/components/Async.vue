<template>
  <div class="main">
    <a-button @click="baseAsync" type="">基础Async</a-button> 



    <a-button @click="sort" type="">eventloop 事件顺序 【结果存在争议】</a-button> 

    <a-button @click="hongrenwuAndweirenwu = !hongrenwuAndweirenwu" type="">宏任务微任务【图解】</a-button> 
    <img v-show="hongrenwuAndweirenwu" src="@/assets/hongrenwuAndweirenwu.png" alt="">
  </div>
</template>

<script>
export default {
  data(){
    return{
      hongrenwuAndweirenwu:false
    }
  },
  methods: {
    
    baseAsync(){
      this.$message.info('看打印')
      function requestData(url){
        return new Promise((resolve,reject) =>{
          setTimeout(()=>{
            resolve(url)
          },2000)
        })
      }
      async function f() {
        const res1 = await requestData("001")
        console.log( "res1: ", res1)
        const res2 = await requestData(res1)
        console.log( "res2 : ", res2)
        const res3 = await requestData(res2)
        console.log( "res3: ", res3)
        return res3

      }

      f().then(
        v => console.log(v),
        e => console.log(e)
      )
    },
    // 异步顺序
    sort(){
      async function async1() {
          console.log("async1 start");
          await async2();
          console.log("async1 end");
      }

      async function async2() {
          console.log("async2");
      }

      console.log("script start");

      setTimeout(function() {
          console.log("setTimeout");
      }, 0);

      async1();

      new Promise(function(resolve) {
          console.log("promise1"); 
          resolve();
      }).then(function() {
          console.log("promise2");
      });

      console.log("script end");

      // script start  第一个主线程调用
      // async1 start   第二个主线程调用  ,内部正常顺序执行  它的仅仅是把return值包装成了promise，其他并没有什么不同的地方。所以就很普通的打印 console.log( ‘async1 start’ )
      // async2   先计算出右侧的结果，.然后看到await后，中断async函数先得到await右侧表达式的结果。执行async2()，打印同步代码console.log(‘async2’), 并且return Promise.resolve(undefined)await后，中断async函数，先执行async外的同步代码

      // promise1  执行new Promise()，Promise构造函数是直接调用的同步代码，所以 console.log( ‘promise1’ )
      // script end   第一轮主线程走完

      
      // async1 end
      // promise2   先执行微任务，后执行宏任务
      // setTimeout  先执行微任务，后执行宏任务


      // 常规顺序 1、主线程  2、微任务  3、宏任务
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  .ant-btn{
    margin: 10px;
    display: block;
  }
}
.huanhang{
  color: #ccc;
}
</style>
<!-- 
  async函数是Generator函数的语法改进写 

  好处
  1、Generator函数的执行必须靠执行器，所以才有了co模块，
  async函数自带执行器。
  async函数的执行，与普通函数一模一样，只要一行。

  2、返回值是Promise 可以用then方法指定下一步的操作
  3、async函数的await命令后面，可以是Promise对象和原始类型的值
-->