function fun(){
  console.log(this)
}

let dog = {
  name:'我不是狗',
  print () {
    console.log(this.name  + '---我真的不是狗')
  },
  eat(food){
    console.log('我偶尔吃' + food)
  }
}



let cat = {
  name:'我原来是狗，，我用call变成了猫'
}

export const start = function () {
  fun() // window
  fun.call('我成了fun的this') // String {'我成了fun的this'}
  fun() // window
			
  // 就好像cat里面有了一个dog.print
  // cat继承了dog.print
	dog.print.call(cat)  // 我原来是狗，，我用call变成了猫---我真的不是狗

  // dog.print.call(cat) 的隐式操作
  /**
   * let cat = {
   *  name:'我原来是狗，，我用call变成了猫',
   *  print () {
   *    console.log(this.name  + '---我真的不是狗')
   *  }
   * }
   * 
   */
  // 改完this指向后会立即调用新指向的函数
  // cat继承了dog.eat   cat拿到了dog.eat
  dog.eat.call(cat, '鱼','虾')
  dog.eat.apply(cat, ['鱼','虾'])

  let mbind = dog.eat.bind(cat, '鱼','虾')
  mbind()
}

/**
 * 手写call
 */

export const rightCall = function(){

  function Fn (a,b,c){
    console.log(this.clothes + a + b + c)
  }
  const o = {
    clothes:'shirt'
  }

  Function.prototype.myCall = function (o,...args){     // 如果是apply  将...args换成args即可
    // 1、this指的是Fn函数  ----指向
    o.fn = this   
    // 2、----调用   o.fn 就是拿过来的函数了
    let res = o.fn(...args)
    // 3、清除
    delete o.fn
    // 4、返回
    return res
  }
  Fn.myCall(o,1,2,3)

  console.log(o) // 再对象o里面扩展的fn，，，，，也可以说是对象o继承了fn
}

// 完全体的call
export const rightCallFull = function(){

}
