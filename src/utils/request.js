import axios from 'axios'
import { message, Modal } from 'ant-design-vue'

const confirm =  Modal.confirm

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ3ZWIiLCJ1c2VyQWNjb3VudCI6ImR5eHU0IiwiaXNzIjoicHBtLXBsYXRmb3JtIiwiZXhwIjoxNjY2MjYwMzQ5LCJpYXQiOjE2NjU2NTU1NDksImp0aSI6ImQ2NmUwZTgwNDAwMDQzOWJhY2FjYTM5ZTk1YzFmZGJhIn0.sJ8D0B221DTl-H06wv45gqQnX7B5CcSxZ9Unndf8n18'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'http://10.5.114.22:8888/',
  timeout: 30000 // 请求超时时间
})

// request防抖



// 请求拦截器
request.interceptors.request.use(config => {
  console.log('config:___',config)
  /**
   * 1、判断存储的上一个请求接口  和当前的请求接口是否一样
   * 2、如果是，阻断
   * 3、如果不是
   *    1）放行
   *    2）保存当前请求接口地址
   * 4、请求结束后，清除的上一个请求接口
   */
  // if(config.method.toUpperCase() === 'DELETE'){
  //   confirm({
  //     title: '确定删除?',
  //     content: '点击确定将直接删除，且无法撤回',
  //     onOk: () => {
  //       message.info('aaaaa')
  //     },
  //     onCancel () {
  //     }
  //   })
  // }else {
    
  // }
  const hisUrl = sessionStorage.getItem('hisUrl')
  if(config.url === hisUrl){
    return Promise.reject('防抖阻断')
  }else {
    config.headers['token'] = token
    sessionStorage.setItem('hisUrl',config.url)
    return config
  }
  
}
,error =>{
  // message.error('网络异常,请稍后再试')
  return Promise.reject(error)
})


// 响应拦截器
request.interceptors.response.use((response) => {
  console.log('response:',response)
  // 请求结束后才允许下一个同名接口访问
  sessionStorage.setItem('hisUrl',null)
  return response.data
}
,error =>{
  // message.error('网络异常,请稍后再试')
  return Promise.reject(error)
})


export default request




// const VueAxios = {
//   vm: {},
//   // eslint-disable-next-line no-unused-vars
//   install (Vue, instance) {
//     if (this.installed) {
//       return
//     }
//     this.installed = true

//     if (!instance) {
//       // eslint-disable-next-line no-console
//       console.error('You have to install axios')
//       return
//     }

//     Vue.axios = instance

//     Object.defineProperties(Vue.prototype, {
//       axios: {
//         get: function get () {
//           return instance
//         }
//       },
//       $http: {
//         get: function get () {
//           return instance
//         }
//       }
//     })
//   }
// }

// const installer = {
//   vm: {},
//   install (Vue) {
//     Vue.use(VueAxios, request)
//   }
// }

// export {
//   installer as VueAxios,
//   request as axios
// }
