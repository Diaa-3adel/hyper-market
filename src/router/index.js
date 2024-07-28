import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import OurStoriesView from '../views/OurStoriesView.vue'
import OurPrivacyView from '../views/OurPrivacyView.vue'
import MdowanaView from '../views/MdowanaView.vue'
import OurRolesView from '../views/OurRolesView.vue'
import QuestionView from '../views/QuestionView.vue'

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

  {
    path: '/ContactUsView',
    name: 'ContactUs',
    component: ContactUsView,
  },

  {
    path: '/OurStoriesView',
    name: 'OurStoriesView',
    component: OurStoriesView,
  },

  {
    path: '/OurPrivacyView',
    name: 'OurPrivacyView',
    component: OurPrivacyView,
  },
  {
    path: '/MdowanaView',
    name: 'MdowanaView',
    component: MdowanaView,
  },

  {
    path: '/OurRolesView',
    name: 'OurRolesView',
    component: OurRolesView,
  },
  {
    path: '/QuestionView',
    name: 'QuestionView',
    component: QuestionView,
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
