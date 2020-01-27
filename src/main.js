import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
  ]
 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
