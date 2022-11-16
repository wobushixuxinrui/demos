<template>
  <div>
    <pre>
      <code class="language-js line-numbers">
        低优先级
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
  created(){
    this.start()
  },
  methods:{
    start(){
      function sPromise(excutor){
        // 1执行结构
        let self = this
        self.status = 'pending'
        self.value = 'value'
        self.reason = 'reason233333'

        // 8、添加缓存
        self.onFulfilledcallbacks = []
        self.onRejectedCallbacks = []

        // 4、判断成功
        function resolve(value){
          if(self.status === 'pending'){
            self.value = value
            self.status = 'fulfilled'
            // 10状态改变取出
            self.onFulfilledcallbacks.forEach(n=>{n(value)})
          }
        }
        function reject(reason){
          if(self.status === 'pending'){
            self.reason = reason
            self.status = 'rejected'
            // 10状态改变取出
            self.onRejectedCallbacks.forEach(n=>{n(reason)})
          }
        }
        // 3执行
        excutor(resolve,reject)
      }
      sPromise.prototype.then = function(onfulfilled,onrejected){
        // 状态改变调用then
        onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : function (data) { resolve(data) }
        onrejected = typeof onrejected === 'function' ? onrejected : function (err) { throw err }
        // 9先添加
        let self = this // ？？？？？

        if(self.status === 'fulfilled'){
          return  new sPromise((resolve,reject) =>{
            try{
              let x = onfulfilled(self.value)
              x instanceof sPromise ? x.then(resolve,reject) : resolve(x)
            }catch(err){
              reject(err)
            }
          })
        }
        if(self.status === 'rejected'){
          return  new sPromise((resolve,reject) =>{
            try{
              let x = onrejected(self.reason)
              x instanceof sPromise ? x.then(resolve,reject) : resolve(x)
            }catch(err){
              reject(err)
            }
          })
        }
        if(self.status === 'pending'){
          return  new sPromise((resolve,reject) =>{
            self.onFulfilledcallbacks.push(()=>{
              let x = onfulfilled(self.value)
              x instanceof sPromise ? x.then(resolve, reject) : resolve(x);
            })
            self.onRejectedCallbacks.push(() => {
              let x = onrejected(self.reason)
              x instanceof sPromise ? x.then(resolve, reject) : resolve(x);
            })
          })
        }
      }

      sPromise.prototype.catch = function(fn){
        return this.then(null,fn)
      }
      let s = new sPromise((resolve,reject) =>{
        // 6 尝试异步
        setTimeout(()=>{
          reject('失败原因')
        })
      })

      // 7 异步失败
      s.then(res =>{
        console.log(res)
      }).catch(err=>{
      })
    }
  }
}
</script>

<style>

</style>  