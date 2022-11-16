<template>
  <div class="main">
    <a-button @click="links" type="">链式调用</a-button> 

    <a-button @click="basePromise" type="">基础promise</a-button> 

    <a-button @click="promiseAll" type="">promise All</a-button>
    
    <a-button @click="promisecatch" type="">promise catch</a-button>

    <a-button @click="promiseOrder" type="">promise 相关顺序</a-button>

    <a-button @click="promiserace" type="">promise race</a-button>

    <a-button @click="promiseOrderPlus" type="">其他顺序</a-button>
    
    
    promise 其他问题：
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods: {
    // 链式调用
    links(){
      // 链式调用示例
      let is = true
      let getLv = new Promise((resolve,reject)=>{
        if(is){
          resolve({
            color:'black'
          })
        }else {
          reject(new Error('err'))
        }
      })
      let byLip = (lv)=>{
        return Promise.resolve({
          lv,
          message:'芭比蓝' + lv.color
        })
      }
      let res = ()=>{
        getLv.then(byLip).then(res =>{
          console.log(res)
        })
      }
      res()
    },

    // 基础 promise
    basePromise () {
      const randomNum = Math.random(100) * 100
      const pFunction = new Promise((resolve, reject) => {
        if (randomNum > 30) {
          resolve('resolve')
        } else {
          reject(randomNum)
        }
      })
      pFunction.then((res) => {
        this.$message.info(res)
      }, (res) => {
        this.$message.info(res)
      })
    },
    // 基础 promiseAll
    promiseAll(){
      
      const p1 = new Promise((resolve, reject) => {
        const randomNum = Math.random(100) * 100
        if (randomNum > 30) {
          resolve('resolve')
        } else {
          reject(randomNum)
        }
      })
      const p2 = new Promise((resolve, reject) => {
        const randomNum = Math.random(100) * 100
        if (randomNum > 30) {
          resolve('resolve')
        } else {
          reject(randomNum)
        }
      })
      const p3 = new Promise((resolve, reject) => {
        const randomNum = Math.random(100) * 100
        if (randomNum > 30) {
          resolve('resolve')
        } else {
          reject(randomNum)
        }
      })

      const res = Promise.all([p1,p2,p3])
      this.$message.info('请看log')
      console.log(res)
    },
    // 抛出异常【不是拒绝】 会执行
    promisecatch(){
      const mmp = new Promise((resolve,reject) =>{
        const randomNum = Math.random(100) * 100
        if (randomNum > 50) {
          resolve('resolve:' + randomNum)
        } else {
          throw "执行catch";
          // reject(randomNum)
        }
      }) 
      mmp.then(res =>{
        this.$message.info(res)
      }).catch(catc =>{
        this.$message.info(catc)
      }).finally(()=>{
        this.$message.info('finally')
      })

    },
    // 执行顺序
    promiseOrder(){
      // setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log(’one‘)则是立即执行，因此最先输出。
      setTimeout(function () {
        console.log('three')
      }, 0)

      Promise.resolve().then(function () {
        console.log('two')
      })

      console.log('one')

      // one
      // two
      // three
    },
    //其他顺序
    promiseOrderPlus(){
      console.log('1')
      const pFunction = new Promise((resolve, reject) => {
        console.log('2')
        resolve('3')
        setTimeout(()=>{
          console.log('4')
          throw('5')
        },0)
      })
      pFunction.then(res =>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },
    // race
    promiserace(){
      this.$message.info('只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数')
      // 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
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
</style>