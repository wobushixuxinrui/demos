<template>
  <div>
    <a-list :grid="{ gutter: 16, column: 6 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card size="small" ><router-link :to="item.link" >{{ index + '-' + item.title  }}</router-link> </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        {
          title:'mixin混入',
          link:'/components/vue/mixin'
        },
        {
          title:'ue优化',
          link:'/components/vue/vueOptimization'
        },
        {
          title:'自定义指令',
          link:'/components/vue/vueDirective'
        }
      ]
    }
  }
}
</script>

<style>

</style>