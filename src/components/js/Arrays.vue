<template>
  <div>
    <a-button type="" @click="doSomeThing">点击触发</a-button>
    
    

    {{ ad }}
    <pre>
      <code class="language-html line-numbers" >
        1、 数组空位 [,,,]     !!!要避免数组空位
          Array.from方法会将数组的空位，转为undefined
          扩展运算符（...）也会将空位转为undefined

        2、includes(值,起始位置)

        3、[].entries 对数组 键值对的遍历

        4、[].fill(填充的内容,填充的起始位置,填充的结束位置)

        5、[].find((当前的值, 当前的位置, 原数组)=>{ 过滤方法 })    // 找出第一个符合条件的数组成员

        6、Array.of(x,x,x,x) 方法用于将一组值，转换为数组

        7、Array.isArray 
          当检测 Array 实例时，Array.isArray 优于 instanceof，因为 Array.isArray 能检测 iframes
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  mounted(){
    Prism.highlightAll()
  },
  data(){
    return{
      ad:['shen','shin','mm','liu','yang','ming']
    }
  },
  methods:{
    doSomeThing(){
      this.ad.splice('shin',1) // 删除
      this.ad.pop() // 删除最后
      this.ad.shift() // 删除第一个

      this.deleteByIndex() // splice多功能
      this.arrayForm()
    },

    deleteByIndex(){
      // index	必需。规定从何处添加/删除元素。
      // 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
      // howmany	可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
      // 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
      // item1, ..., itemX	可选。要添加到数组的新元素

      let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']

      let index = 1 // 规定从何处添加/删除元素。
      let howmany = 2 // 规定应该删除多少元素

      let removedItems = vegetables.splice(index, howmany,'wo','bu','shi')

      console.log(vegetables)
      //  ['Cabbage', 'wo', 'bu', 'shi', 'Carrot']

      console.log(removedItems)
      // ["Turnip", "Radish"]
    },
    arrayForm(){
      const aaa = Array.from('wobushi', (n,index) =>  n +'_' + index )

      function f() {
        return Array.from(arguments);
      }
      f(1, 2, 3)

    }
  }
}
</script>

<style>

</style>