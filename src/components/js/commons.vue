<template>
  <div>

  </div>
</template>

<script>
export default {
  created(){
    this.main()
  },
  methods:{
    main(){
      for (var i = 1 ; i<10 ; i++){
        setTimeout(()=>{
          console.log(i)
        })
      }
      for (const j = 1 ; j<10 ; j++){
        setTimeout(()=>{
          console.log(j)
        })
      }
      console.log(i)
      console.log(j)
    }
  }
}
</script>

<style>

</style>