<template>
  <div class='navbar'>
    <span>Carsharing</span>
    <div class="links">
        <div class="navitem">
          <a class='navlink' href="">Sign in</a>   
        </div>
        <div class="navitem">
          <a class='navlink' href="">Sign in</a>   
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  height: 3.6rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  padding: .7rem 1.5rem;
  line-height: 2.2rem;
}
span {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 600;
}
.links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    background-color: #fff;
    white-space: nowrap;
    font-size: .9rem;
    position: absolute;
    right: 1.5rem;
    top: .7rem;
    display: -webkit-box;
    display: flex;
}
</style>