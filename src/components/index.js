const rc = require.context('./',true,/.vue$/)
// console.log('rcrcrcrcrcrc:',rc)
// console.log('rcrcrcrcrcrc.keys():',rc.keys())


const install = (Vue) =>{
  if(install.installed) return
  install.installed
  rc.keys().forEach(n => {
    // 第i个组件
    const config = rc(n)
    // 组件名
    const compomentsName = config.default.name

    Vue.component(compomentsName,config.default || config)
  });

  // ？？？？？？
  Vue.directive('focus',{
    inserted:function(el){
      el.focus()
    }
  })
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}