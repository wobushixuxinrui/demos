<template>
  <div>
    <pre>
      <code class="language-html line-numbers" >
        本场不适合演示 因为this指向vue
        指向调用者

        var length = 10
        var a = 10
        let b = 10

        function test(){
          console.log('this.a:',this.a)
          console.log('this.b:',this.b)
          console.log('this.length.var:',this.length)
        }
        
        test()
        // this.a: 10
        // this.b: undefined
        // this.length.var: 10
        
        var obj = {
          a: 100,
          b: 100,
          length: 100,
          action:function(test){
            test();
            arguments[0]()
          },
          shin:test
        }

        obj.shin()
        // this.a: 100
        // this.b: 100
        // this.length.var: 100

        var f = obj.shin
        f() 
        // this.a: 10
        // this.b: undefined
        // this.length.var: 10

        var arr = [test,1,2,3]
        // arr[0]()
        // this.a: undefined
        // this.b: undefined
        // this.length.var: 4

        obj.action(test,1,2,3,4)
          // this.a: 10
          // this.b: undefined
          // this.length.var: 10
          // this.a: undefined
          // this.b: undefined
          // this.length.var: 5
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

    }
  },
  methods:{
    doSomeThing(){
      var length = 10
      var a = 10
			let b = 10

      function test(){
        console.log('this.a:',this.a)
				console.log('this.b:',this.b)
				console.log('this.length.var:',this.length)
      }
      test()

      var obj = {
        a: 100,
				b: 100,
				length: 100,
				action:function(test){
					test();
					arguments[0]()
				},
        shin:test
      }


      obj.shin() // 100

      var f = obj.shin
      f() // 10

      var arr = [test,1,2,3]
      arr[0]() // 4

      obj.action(test,1,2,3,4)
      // 4

    }
  }
}
</script>

<style>

</style>