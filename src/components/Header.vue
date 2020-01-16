<template>
    <div class="header">
    <span class="logo">Logo</span>
    <nav>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                {{item.title}}
            </li>
        </ul>
    </nav>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [
                {id: 1, title: 'Log in'},
                {id: 2, title: 'Sign in'}]
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

li {
    list-style-type: none;
    padding: 0 5px;
}

</style>