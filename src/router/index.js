import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Object from '../views/Object.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/p:id',
    name: 'Object',
    component: Object
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
