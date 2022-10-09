<template>
  <div>
    <ChildSlot>

      <!--
        具名
        <slot name="wobushi"></slot>
      -->
      <a href="" slot="wobushi">第一种</a>
      <template v-slot:wobushi>第二种</template>
      <template #wobushi>第三种</template>
    </ChildSlot>

    <ChildSlot>
      <!--
        子填父
        <slot data="作用域传给父"></slot>
      ---->
      <template v-slot="scope">
        {{ scope.data }}
      </template>
    </ChildSlot>



    <pre>
      <code class="language-html line-numbers" >
        -------------
        {{ futher }}
        -------------
        {{ child }}
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
import ChildSlot from '@/components/vue/childSlot'
export default {
  mounted(){
    Prism.highlightAll()
  },
  components:{
    ChildSlot
  },
  data(){
    return {
      futher:`
        父组件：
        <ChildSlot>
          <a href="" slot="wobushi">第一种</a>
          <template v-slot:wobushi>第二种</template>
          <template #wobushi>第三种</template>

          <template v-slot="scope">
            {{ scope.data }}
          </template>
        </ChildSlot>`,
      child:`
        子组件ChildSlot.vue：
        <div>
          <slot name="wobushi"></slot>
          <slot data="作用域传给父"></slot>
        </div>

        显示效果如上
        <!--<slot data="作用域传给父"></slot>    自插槽组件传值给父组件-->
        `

      
    }
  }
}
</script>

<style>

</style>