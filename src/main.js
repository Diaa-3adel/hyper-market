const pinia = createPinia();

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';

import { createPinia } from 'pinia'

// 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


createApp(App).use(store).use(router).use(PrimeVue).use(pinia).use(ToastService).mount('#app');
