<template>
  <div class="home">
    <a-button @click="getData" type="">getData</a-button> 
    <Prism :content="`456789`" >
    </Prism>
  </div>
</template>

<script>
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
      }
    }
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