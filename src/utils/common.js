import Vue from 'vue'

/**
 * 防抖
 *
 * 使用方法：
 * this.$debounce(() => {
     ....
   })
 **/
let timeout
Vue.prototype.$debounce = function (func, delay = 600) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    func.apply(this, arguments)
  }, delay)
}

/**
 * 节流
 */
let timeout__ = null
Vue.prototype.$throttle_ = function (fn, wait) {
  if (!timeout__) {
    timeout__ = setTimeout(() => {
      timeout__ = null
      fn.apply(this, arguments)
    }, wait)
  }
}

let cando = true
function look(){
  if(cando){
    cando = false
    setTimeout(()=>{
      console.log(222)
        cando = true // 一秒后 cando 才会变成true，，，，，cando变成true才能执行
    }, 1000)
  }
}





/**
 * 空数据判断
 * exist存在
 **/
Vue.prototype.$notExist_ = function (data) {
  if (typeof (data) === 'undefined') {
    // undefined
    return true
  } else if (data === null || data === '') {
    // 空数据
    return true
  } else if (Object.prototype.toString.call(data) === '[object Array]' && data.length === 0) {
    // 空数组
    return true
  } else if (Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length === 0) {
    // 空对象
    return true
  } else {
    return false
  }
}

Vue.prototype.$has_ = function (data) {
  if (typeof (data) === 'undefined') {
    // undefined
    return false
  } else if (data === null || data === '') {
    // 空数据
    return false
  } else if (Object.prototype.toString.call(data) === '[object Array]' && data.length === 0) {
    // 空数组
    return false
  } else if (Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length === 0) {
    // 空对象
    return false
  } else {
    return true
  }
}



/**
 * 限制输入指令
 * Vue.directive('numberInput', numberInput)
 * **** ---->  v-number-input.float
 * v-number-input
 * v-number-input.password
 * v-number-input.git
 **/
function onInput (el, ele, binding, vnode) {
  function handle () {
    let val = ele.value
      // modifiers为修饰符对象，传入了float，则其float属性为true
      if (binding.modifiers.floatone) {
        val = val.replace(/。/g, '.')
        // 清除"数字"和"."以外的字符
        val = val.replace(/[^\d.]/g, '')
        // 只保留第一个, 清除多余的
        val = val.replace(/\.{2,}/g, '.')
        // 第一个字符如果是.号，则补充前缀0
        val = val.replace(/^\./g, '0.')
        if (val.includes('.')) {
          const [header, foot] = String(val).split('.')
          let mf = ''
          if (foot.length) { mf = foot.slice(0, 1) }
          val = `${header}.${mf}`
        }
      } else if (binding.modifiers.password) {
        // 去除汉字
        val = val.replace(/[\u4e00-\u9fa5]/g, '')
      } else if (binding.modifiers.git) {
        // 去除汉字
        val = val.replace(/[\u4e00-\u9fa5]/g, '')
        val = val.replace(/ /g, '')
        // val = val.replace(/~/g, '')
        // val = val.replace(/？/g, '')
        // val = val.replace(/[?]/g, '')
        // val = val.replace(/:/g, '')
        // val = val.replace(/：/g, '')
        // val = val.replace(/[\\]/g, '')
        // val = val.replace(/[*]/g, '')
        // val = val.replace(/[\^]/g, '')
      } else if (binding.modifiers.float) {
        val = val.replace(/。/g, '.')
        // 清除"数字"和"."以外的字符
        val = val.replace(/[^\d.]/g, '')
        // 只保留第一个, 清除多余的
        val = val.replace(/\.{2,}/g, '.')
        // 第一个字符如果是.号，则补充前缀0
        val = val.replace(/^\./g, '0.')
      } else {
        val = ele.value.replace(/[^\d]/g, '')
      }
    ele.value = val
  }
  return handle
}

export const numberInput = {
  bind (el, binding, vnode) {
    const ele = el.tagName === 'INPUT' ? el : el.querySelector('input')
    ele.addEventListener('input', onInput(el, ele, binding, vnode), false)
    ele.addEventListener('onBlur', onInput(el, ele, binding, vnode), false)
  }
}



export const thismonth = `${new Date().getFullYear()}-${parseFloat(new Date().getMonth() + 1) > 9 ? parseFloat(new Date().getMonth() + 1) : '0' + parseFloat(new Date().getMonth() + 1)}`

const shin = 'shin'

export {
  shin
}