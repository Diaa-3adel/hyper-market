import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import OurStoriesView from '../views/OurStoriesView.vue'
import OurPrivacyView from '../views/OurPrivacyView.vue'
import MdowanaView from '../views/MdowanaView.vue'
import OurRolesView from '../views/OurRolesView.vue'
import QuestionView from '../views/QuestionView.vue'
import RegisterView from '../views/RegisterView.vue'
import ConfirmView from '@/views/ConfirmView.vue'
import SuccessPay from '@/views/SuccessPay.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import MyFavoriteView from '@/views/MyFavoriteView.vue'
import AccSettingView from '@/views/AccSettingView.vue'
import SavedAddressView from '@/views/SavedAddressView.vue'
import AddNewAddressView from '@/views/AddNewAddressView.vue'
import NewsDetails from '@/views/NewsDetails.vue'
import AllProductView from '@/views/AllProductView.vue'

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

  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView,
  },

  {
    path: '/ConfirmView',
    name: 'ConfirmView',
    component: ConfirmView
  },
  {
    path: '/SuccessPay',
    name: 'SuccessPay',
    component: SuccessPay

  },
  {

    path: '/FavoriteView',
    name: 'FavoriteView',
    component: FavoriteView,


  },
  {

    path: '/MyFavoriteView',
    name: 'MyFavoriteView',
    component: MyFavoriteView,


  },
  {

    path: '/AccSettingView',
    name: 'AccSettingView',
    component: AccSettingView

  },
  {

    path: '/SavedAddressView',
    name: 'SavedAddressView',
    component: SavedAddressView

  }
  ,
  {

    path: '/AddNewAddressView',
    name: 'AddNewAddressView',
    component: AddNewAddressView

  } ,
  {

    path: '/NewsDetails',
    name: 'NewsDetails',
    component: NewsDetails

  } ,
  {

    path: '/AllProductView',
    name: 'AllProductView',
    component: AllProductView

  }




]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
})

export default router
