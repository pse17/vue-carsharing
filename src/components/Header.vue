<template>
    <div class="header">
    <span class="logo">Logo</span>
    <nav>
        <ul>
            <router-link
                v-for="item in items"
                v-bind:key="item.id"
                :to="item.url">
                {{item.title}}
            </router-link>
        </ul>
    </nav>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {id: 1, title: 'Log in', url: '/login'},
                {id: 2, title: 'Register', url: '/register'}]
        }
    },
}
</script>

<style>
.header {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 30;
    background-color: lightcyan;
}

.logo, nav, li {
    display: inline-block;
}

nav, .logo {
    line-height: 60px;
}

.logo {
    width: 10%;
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
}

nav {
    width: 90%;
    text-align: right;
}

ul {
    padding: 0 20px 0;
    margin: 0;
}

nav a {
    padding: 0 5px;
}

</style>