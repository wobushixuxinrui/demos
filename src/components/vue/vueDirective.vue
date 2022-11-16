<template>
  <div>
    
    <input v-focus:123 value="vue3完全改版了,这是2" />
  </div>
</template>

<script>

const focus = {
  bind (el,binding,vnode) {
    console.log('el:指令所绑定的元素，可以用来直接操作 DOM。',el)
    console.log('binding',binding)
    console.log('vnode',vnode)
  }
}


export default {
  directives:{
    focus
  }
}
</script>

<style>

</style>