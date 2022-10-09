import axios from 'axios'
// import { Message } from 'ant-design-vue'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJ3ZWIiLCJ1c2VyQWNjb3VudCI6ImR5eHU0IiwiaXNzIjoicHBtLXBsYXRmb3JtIiwiZXhwIjoxNjY0NTI3ODM3LCJpYXQiOjE2NjM5MjMwMzcsImp0aSI6IjA5YWZkNWViNTRiNzRiYjRiNTk0YzhlOGY4NzcwMmYwIn0.OSZFJFTTpJYvqkN81xXekl3hE0jqiCDT3To9yQprd54'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'http://10.5.114.22:8888/',
  timeout: 30000 // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(config => {
  config.headers['token'] = token
  console.log('config:',config)
  return config
}
,error =>{
  // Message.error('网络异常,请稍后再试')
  return Promise.reject(error)
})


// 响应拦截器
request.interceptors.response.use((response) => {
  debugger
  console.log('response:',response)
  return response.data
}
,error =>{
  // Message.error('网络异常,请稍后再试')
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
