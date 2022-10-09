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
