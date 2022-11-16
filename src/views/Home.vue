<template>
  <div class="home">
    <a-button @click="getData" type="">走接口</a-button> 
    <Prism :content="`456789`" ></Prism>
    {{ shin }}

  </div>
</template>

<script>
import { shin as jj } from '@/utils/common.js'




import { workTicketpage } from '@/api/workTicket.js'
export default {

  data(){
    return{
      params:{
        pageIndex: 1,
        projectId: "",
        pageSize: 15,
        keyword: "",
        queryViewModel: null,
        queryModule: "",
        statusFlag: "done"
      },
      shin: undefined
    }
  },
  created(){
    this.shin =   Object.freeze(jj)
  },
  methods:{
    getData(){
      workTicketpage(this.params).then(res =>{
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>