import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/CartView',
    name: 'CartView',
    component: CartView,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
