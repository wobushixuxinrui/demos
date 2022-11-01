<template>
  <div>
    <!---
      1, new 实例化构造函数，
      产生的实例可以访问到构造函数的属性和方法
      原型上面的也可以访问到,
        如果直接return出复杂数据类型的数据，同时无法访问构造函数的方法和属性
        直接返回简单数据类型的化，就可以正常访问

        实现一个new
        创建一个新的对象
        将这个对象的__proto__,指向构造函数的原型
        执行这个构造函数，为对象添加方法和属性
        return出这个对象,
    -->

    
    <a-button @click="todo" type="">触发</a-button> <br />

    <img src="@/assets/proto.jpg"  alt="" />
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  methods:{
    todo(){
      function Per(name) {
        this.name = name
				this.sayGoodBay = function (){
					console.log('byebye')
				}
        return 'bbb'
			}
			Per.prototype.sayHate = function () {
				console.log('sayHate')
			}
			// const myPer =  new Per()
			// console.log('myPer.__proto__',myPer.__proto__)
			// console.log('Per.prototype',Per.prototype)


      ////////////////
      function _new(ctor,...args){

        if(Object.prototype.toString.call(ctor) !== '[object Function]'){
          throw '参数需要是函数'
        }
        // 创建一个新的对象
        // 将这个【实例】对象的__proto__,指向构造函数的原型
        // 执行这个构造函数，为对象添加方法和属性
        // return出这个对象,
        let obj = {}
        obj.__proto__ = ctor.prototype // Object.Create(ctor.prototype)
        const res = ctor.apply(obj,[...args])

        let isObj = Object.prototype.toString.call(res) === '[object Object]'
        let isFunction = Object.prototype.toString.call(res) === '[object Function]'

        return isObj || isFunction ? res : obj
      }






      const aaaa = _new(Per,'徐欣瑞')

      // 最骚操作之：实例上加方法
      aaaa.__proto__.sayLo = function () {
        console.log('sayLo')
      }


      console.log('aaaa',aaaa)
      aaaa.sayGoodBay()
      aaaa.sayLo()
    }
  }
}
</script>



<style lang="scss" scoped>

</style>
