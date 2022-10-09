<template>
  <div>
    <!-- <router-link to="/linkComponents/clickCopy" >点击复制文本</router-link> <br />
    <router-link to="/linkComponents/preEdit" ></router-link> <br /> -->

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
          title:'点击复制文本',
          link:'/linkComponents/clickCopy'
        },
        {
          title:'在线代码显示prism',
          link:'/linkComponents/preEdit'
        },
        {
          title:'常用正则表达式仓库',
          link:'/linkComponents/reg'
        },
        {
          title:'数组去重',
          link:'/linkComponents/toUnique'
        },
        {
          title:'数组查出现次数',
          link:'/linkComponents/arrayEngine'
        }
      ]
    }
  }
}
</script>

<style>

</style>