<template>
  <div>
		
		
		<pre>
		<code class="language-js" >
			1、统计出现次数最多的元素
			2、统计每个元素出现的次数

			-------------------------
			arr: [1,2,333,4,11,2,3,556,8,11,2,1,1,1,6,66,4,2,66,2,'erg','edwf','dd','g','yj','e','efhtr','e','hh','h','hh','f','efer']
			-------------------------

			count(arr){
			let max = 0 // 存储最大重复出现次数
			let key = null //存储最大重复出现次数的key

			let s = [] // 存储数组
			let obj = {} // 存储每个值出现从次数和对应的key
			
			for (const i of arr){
				if(s.includes(i)){
					obj[i]++
					
					// 收集max
					if(max < obj[i]){
						max = obj[i]
						key = i
					}
					// 收集
					
				}else {
					s.push(i)
					obj[i] = 1
				}
			}
			
			return {
				everyNum:obj,
				maxNum:{
					max,
					key
				}
			}
		}

		-------------------------
		打印如下
		-------------------------

			{{ count(arr) }}
		</code>
	</pre>
	</div>
</template>

<script>
import Prism from "prismjs";
export default {
	data(){
		return {
			arr: [1,2,333,4,11,2,3,556,8,11,2,1,1,1,6,66,4,2,66,2,'erg','edwf','dd','g','yj','e','efhtr','e','hh','h','hh','f','efer']
		}
	},
	mounted(){
		Prism.highlightAll()
	},
  methods:{

    count(arr){
			let max = 0 // 存储最大重复出现次数
			let key = null //存储最大重复出现次数的key

			let s = [] // 存储数组
			let obj = {} // 存储每个值出现从次数和对应的key
			
			for (const i of arr){
				if(s.includes(i)){
					obj[i]++
					
					// 收集max
					if(max < obj[i]){
						max = obj[i]
						key = i
					}
					// 收集
					
				}else {
					s.push(i)
					obj[i] = 1
				}
			}
			
			return {
				everyNum:obj,
				maxNum:{
					max,
					key
				}
			}
		}
  }
}
</script>

<style>

</style>