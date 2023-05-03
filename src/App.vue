<template>

  <router-view/>
</template>
<script>
import Menu from '@/components/Menu/Menu.vue'
import MenuLog from '@/components/Menu/MenuLog.vue'
export default {
  name:'App',
  components:{
    Menu,
    MenuLog
  }
  
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
::-webkit-scrollbar{
  width:3px;
}
::-webkit-scrollbar-thumb{
  background:#416991;
  border-radius:10px;
}
</style>
