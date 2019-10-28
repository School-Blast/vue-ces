<template>
  <div id="app">
      <Top></Top>
      <Content></Content>
      <router-view></router-view>
      <Up></Up>
  </div>
</template>
<script>
import Top from './components/Top/Top'
import Up from './components/Up/Up'
import Content from './components/Content/Content'
export default {
  name:"app",
  components:{Top,Up,Content}
}
</script>

<style>
*{

  margin: 0;
  padding: 0;
  background: #ccc;
}
</style>
