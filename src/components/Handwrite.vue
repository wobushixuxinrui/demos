<template>
  <div>
    <a-list :grid="{ gutter: 16, column: 6 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card size="small" ><router-link :to="item.link" >{{ Number(index) + 1  + '-' + item.title  }}</router-link> </a-card>
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
          title:'手撕new',
          link:'/linkComponents/writeNew'
        },
        {
          title:'手撕promise',
          link:'/linkComponents/writePromise'
        }
      ]
    }
  }
}
</script>

<style>

</style>