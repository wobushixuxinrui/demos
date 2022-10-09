<template>
  <div>
    {{ $store.state.user.userName }}
    {{ length }}

    <a-button @click="change('我真的是的')" type="">修改方式-直接修改-commit</a-button> 
    <a-button @click="changes()" type="">修改方式-mapMutations</a-button> 
    <a-button @click="changess()" type="">修改方式-异步修改-dispatch-commit</a-button> 



    <pre>
      <code class="language-js line-numbers" >
        {{ `
          未解之谜：return this.$store.getters['user/getLength'] 如何传参


          // 针对模块的方式操作vuex
          // 必须配置 namespaced:true,

          // 修改方式1
          this.$store.commit('user/CHANGE_USER_NAME','我我我我我可以改了') 
          // 修改方式2
          ...mapMutations('user',{change:'CHANGE_USER_NAME'}),   

          // 修改方式3
          this.$store.dispatch('changeUser','dispatch修改名称')
          // 修改方式3 对应的js
          // 异步操作
          actions: {
            // 尝试改变modules里面的user
            changeUser(indexStore,data){
              indexStore.commit('user/CHANGE_USER_NAME', data, { root: true })
            }
          }
        ` }}
        ---------------------
        延申：
        getters: 临时转换显示
      </code>
    </pre>
    index.js:
    <pre>
      <code class="language-js line-numbers" >
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        const user = {
          namespaced:true,
          state: {
            userName:'徐欣瑞'
          },
          // 修改数据 用this.$store.commit
          mutations: {
            CHANGE_USER_NAME:(state,userName)=>{
              state.userName = userName
            }
          },
          // 异步操作 用this.$store.dispatch
          actions: {
          },
          // 计算
          getters:{
            getLength(state,data){
              return state.userName + '-' + data
            }
          }
        }


        export default new Vuex.Store({
          
          state: {
            name:'原始Store',
            age:2000
          },
          // 修改数据
          mutations: {
          },
          // 异步操作
          actions: {
            // 尝试改变modules里面的user
            changeUser(indexStore,data){
              indexStore.commit('user/CHANGE_USER_NAME', data, { root: true })
            }
          },
          // 模块  模块里会存在类似于这个结构的内容
          modules: {
            user
          },
          // 计算
          getters:{}
        })
      </code>
    </pre>

  </div>
</template>

<script>
import Prism from "prismjs";
import { mapMutations } from 'vuex'
export default {
  computed:{
    length(){
     return this.$store.getters['user/getLength']
    }
  },
  mounted(){
    Prism.highlightAll()
  },
  methods:{
    changes(){
      this.$store.commit('user/CHANGE_USER_NAME','我我我我我可以改了')
    },
    ...mapMutations('user',{change:'CHANGE_USER_NAME'}),
    changess(){
      this.$store.dispatch('changeUser','dispatch修改名称')
    }
  }
}
</script>

<style>

</style>