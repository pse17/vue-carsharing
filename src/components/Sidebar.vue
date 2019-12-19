<template>
  <div id="sidebar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
