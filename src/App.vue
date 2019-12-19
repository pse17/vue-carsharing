<template>
<div id="app">
    <header>
      <Navbar/>
    </header>
      <Sidebar msg=""/>
      <div class="content">
        <h2>H2 content</h2>
      </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 16px;
  background-color:#fff;
}

</style>
