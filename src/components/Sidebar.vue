<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items : [
        {id: 1, title: "report one"},
        {id: 2, title: "report two"},
        {id: 3, title: "report three"},
      ]
    }
  }

}
</script>

<style>
.sidebar {
  position: absolute;
  border-right: 1px solid lightgray;
  top: 61px;
  padding: 35px 0 60px 20px;
  left: 0;
  bottom: 0;
  width: 260px;
  z-index: 10;
}
.sidebar li {
  display: block;
  line-height: 1.5em;
  font-size: 1.1em;
}
</style>
