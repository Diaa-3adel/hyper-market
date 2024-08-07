<template>
  <div class="head">
    <div class="right">
      <a href="">الاصناف</a>


      <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
    </div>

    </div>

    <div class="left">
      <a href="">المنتجات    </a>
      <router-link to="/OurStoriesView">قصتنا</router-link>
      <router-link to="/MdowanaView">المدونه </router-link>
      <router-link to="/ContactUsView">تواصل معنا</router-link>
    </div>
  </div>

  <div class="img">
    <img src="../assets/e72c3b2ae35f0163ee3978e926d7d322.jpg" alt="" />
  </div>
</template>

<script>

import Listbox from 'primevue/listbox';

export default {
  data(){
    return{
      selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]

    }
  },
  components:{Listbox}
};
</script>

<style scoped>
.head {
  margin: 2% 6%;
  display: flex;
  justify-content: space-between;
}
.right a {
  background-color: #a4ca72;
  color: white;
  padding: 10px 55%;
  border-radius: 10px;
}
a {
  margin: 10px;
  font-size: 22px;
  text-decoration: none;
  color: #605b6c;
}

.img img {
  width: 100%;
}
</style>