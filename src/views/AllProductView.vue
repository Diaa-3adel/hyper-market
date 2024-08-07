<template>
  <navbar-view></navbar-view>
  <our-products></our-products>

  <footer-view></footer-view>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import OurProducts from '@/components/OurProducts.vue';
import FooterView from '@/components/FooterView.vue'
export default {

    data(){
        return{

        }
    },
    components:{
        NavbarView,
        OurProducts,
        FooterView
    }

}
</script>

<style>

</style>