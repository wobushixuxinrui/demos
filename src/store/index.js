import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const user = {
  state: {
    userName:'徐欣瑞',
    age:'29'
  },
  // 修改数据 用this.$store.commit
  mutations: {
    CHANGE_USER_NAME:(state,userName)=>{
      debugger
      state.userName = userName
    },
    CHANGE_USER_AGE:(state,age)=>{
      state.age = age
    }
  },
  // 异步操作 用this.$store.dispatch
  actions: {
    getAge(){
      alert()
    }
  },
}



export default new Vuex.Store({
  state: {
    name:'原始Store',
    age:2000
  },
  // 修改数据
  mutations: {
    CHANGE_USER_AGE:(state,age)=>{
      state.age = age
    }
  },
  // 异步操作
  actions: {
  },
  // 模块  模块里会存在类似于这个结构的内容
  modules: {
    user
  },
  // 计算
  getters:{}
})
