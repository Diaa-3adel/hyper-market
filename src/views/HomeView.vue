<template>
  <div class="Home">
    <NavbarView></NavbarView>
    <header-view></header-view>
    <ShopingView></ShopingView>
    <offer-view></offer-view>
    <our-products></our-products>
    <news-view></news-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import HeaderView from '@/components/HeaderView.vue';
import ShopingView from '@/components/ShopingView.vue';
import OfferView from '@/components/OfferView.vue';
import OurProducts from '@/components/OurProducts.vue';
import NewsView from '@/components/NewsView.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  components: { NavbarView ,HeaderView , ShopingView,OfferView ,OurProducts ,NewsView, FooterView},
};
</script>,
    OfferView

<style>
</style>