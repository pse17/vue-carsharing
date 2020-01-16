<template>
<div id="app">
      <Header/>
      <div class="main">
        <Sidebar/>
        <Content/>
      </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Header,
    Content
  }
}
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  background-color:#fff;
}
#app {
  padding-top: 60px;
}
.main {
  position: static;
  z-index: 1;
  padding: 0 30px 30px 270px;
}
</style>
