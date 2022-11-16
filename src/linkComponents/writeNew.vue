<template>
  <div>
    <pre>
      <code class="language-js line-numbers" >

        1, new 实例化构造函数，
        产生的实例可以访问到构造函数的属性和方法
        原型上面的也可以访问到,
        如果直接return出复杂数据类型的数据，同时无法访问构造函数的方法和属性
        直接返回简单数据类型的化，就可以正常访问

        1、创建一个新的对象  这个对象最终成为实例对象
        2、这个实例对象的原型__proto__  = 构造函数的原型对象prototype
        3、this指向实例对象
        4、同时执行这个构造函数，为对象添加方法和属性

        构造函数四个方法详解
        function Color(type){
          this.type = type,
          this.todo = function (){
            console.log(this.type)
          }
        }
        Color.prototype.shin = function(){
          console.log('shin是构造函数Color里面的原型对象')
        }
        const shili = new Color('sad')
        
        // prototype 构造函数的属性【原型对象】
        // __proto__ 实例对象用到的属性【原型对象】
        // constructor 属性【原型对象】所属的构造函数
        // instanceof 实例对象所属的构造函数
        
        console.log('Color.prototype:',Color.prototype)
        console.log('shili.__proto__:',shili.__proto__) 
        
        console.log('Color.prototype.constructor:',Color.prototype.constructor)
        console.log('shili.__proto__.constructor:',shili.__proto__.constructor)

        console.log(shili instanceof Color)
      </code>
    </pre>

    
    <a-button @click="todo" type="">触发</a-button> <br />

    <img src="@/assets/proto.jpg"  alt="" />
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data(){
    return{
    }
  },
  mounted(){
    Prism.highlightAll()
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

        // 执行了构造函数，this指向了实例对象obj
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
