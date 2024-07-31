<template>
  <navbar-view></navbar-view>
  <div style="background-color: rgba(247, 247, 247, 1)">
    <div class="flex justify-center">
      <Breadcrumb
        style="
          margin-right: 140px;
          font-size: 15px;
          padding: 10px;
          color: rgba(96, 91, 108, 1);
        "
        :home="home"
        :model="item"
        />
    </div>
    




<div class="container-fluid">
    <div class="row">
        <div class="col-md-3" >

            <div class="buton mt-3" style="margin-right: 25%;">

<router-link to="">
  <i class="fa-solid fa-bag-shopping"></i> طلباتــي
</router-link>

<router-link to="/AccSettingView">
  <i class="fa-regular fa-user"></i> اعدادات الحساب
</router-link>

<router-link to="/MyFavoriteView">
  <i class="fa-regular fa-heart"></i> قائمة مفضلاتي
</router-link>

<router-link to="">
    <i class="fa-solid fa-location-dot"></i> العناوين المحفوظة
</router-link>

<router-link style="color: red;" to="">
  <i class="fa-solid fa-arrow-right-from-bracket"></i> تسجيل الخروج
</router-link>
</div>



        </div>


        <div class="col-md-9">


            <div class="res">
      <img width="15%" src="../assets/g1893.png" alt="" />
      <h2>لم تقم باضافة منتجات الى قائمة مفضلاتك بعد !</h2>
      <button>استكمال التســوق</button>
    </div>



        </div>


    </div>
</div>

    <div class="newpro" style="margin-top: 13%">
      <h2>تسوق أحدث المنتجات</h2>
      <button>عرض الكل</button>
    </div>

    <div class="caard">
      <div class="iteem" v-for="(item, index) in items" :key="index">
        <h2>{{ item.brand }}</h2>

        <div class="try">
          <img
            :src="item.image || '@/assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png'"
            alt=""
          />
        </div>

        <div class="eye" @click="openDialogProduct(item)">
          <i class="fa-regular fa-eye"></i>
        </div>

        <div class="price">
          <h5 class="text-muted">{{ item.originalPrice }} ر.س</h5>
          <p>{{ item.discountedPrice }} ر.س</p>
          <i
            style="color: gold; position: relative; top: 10px; right: 125px"
            class="fa-solid fa-star"
            >{{ item.rating }}</i
          >
        </div>
        <h3 style="text-align: right">{{ item.description }}</h3>
        <p
          style="
            font-size: 17px;
            color: rgba(140, 136, 150, 1);
            text-align: right;
          "
        >
          {{ item.details }}
        </p>

        <button
          type="button"
          @click="
        
            addItem(item);
            showAlert();
          "
        >
          <i class="fa-solid fa-cart-shopping"></i>
          أضف الى السلة
        </button>
    </div>
    </div>
    













</div>






</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import Breadcrumb from "primevue/breadcrumb";
import { useCounterStore } from "@/store/Counter";

import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      selected: null,
      cities: [
        { name: " طلباتي", code: "NY" },
        { name: "اعدادات الحساب", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      item: [{ label: " الرئيسية" }, { label: "قائمة المفضلات" }],

      items: [
        {
          id: 1,
          quantity: 1,
          brand: "دينا فارم",
          image: require("../assets/bc599f468ec1cfb6da1d0fd808601971.png"),
          originalPrice: "48.30",
          discountedPrice: "40.30",
          rating: "4.0",
          description: "كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها",
          details: "500 جرام مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد",
          count: 0,
        },
        {
          id: 2,
          quantity: 1,
          brand: "دينا فارم",
          image: require("../assets/4c0fa2636ce2d86369426687cf0748a2.png"),
          originalPrice: "48.30",
          discountedPrice: "40.30",
          rating: "4.0",
          description: "كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها",
          details: "500 جرام مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد",
          count: 0,
        },
        {
          id: 3,
          quantity: 1,
          brand: "دينا فارم",
          image: require("../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"),
          originalPrice: "48.30",
          discountedPrice: "40.30",
          rating: "4.0",
          description: "كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها",
          details: "500 جرام مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد",
          count: 0,
        },
        {
          id: 4,
          quantity: 1,
          brand: "دينا فارم",
          image: require("../assets/cf0719027f79dac053764bd437c26f8a.png"),
          originalPrice: "48.30",
          discountedPrice: "40.30",
          rating: "4.0",
          description: "كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها",
          details: "500 جرام مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد",
          count: 0,
        },
      ],
    };
  },
  computed: {
    ...mapState(useCounterStore, ["addItem"]),
  },
  components: { NavbarView, Breadcrumb },
  methods: {
    showAlert() {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "تم اضافة المنتج بنجاح الى سلة التسوق",
        showConfirmButton: false,
        timer: 1500,
        width: 600,
      });
    },
    ...mapActions(useCounterStore, ["addItem"]),
  },
};
</script>

<style scoped>
.buton a:hover {
  border: 1px solid rgba(164, 202, 114, 1);
}


.res h2 {
  margin: 20px 0;
  font-size: 26px;
  font-weight: bold;
}
.res{
    margin-top: 6%;
    margin-left: 10%;
}
.res button {
  background-color: rgba(164, 202, 114, 1);
  color: white;
  border-radius: 10px;
  border: none;
  padding: 15px 35px;
}
a {
  text-decoration: none;
}
.buton i {
  margin-left: 25px;
}
.buton a {
  display: block;
  padding:15px 20px;
  /* width: 30%; */
  background-color: white;
  border-radius: 10px;
  margin: 7px;
  margin-right: 7%;
  border: none;
  text-align: right;
  color: black;
}

label {
  padding: 13px;
  font-size: 20px;
}
.btn {
  border: none;
  background-color: rgba(164, 202, 114, 1);
  color: white;
  padding: 21px;
  border-radius: 14px;
}
input {
  width: 20px;
  height: 20px;
}
.iteem:hover .eye {
  display: block;
}
.eye {
  display: none;
}
.eye i {
  border: 1px solid black;
  border-radius: 63px;
  padding: 34px;
  font-size: 60px;
  color: white;
  background-color: black;
  opacity: 0.4;
  position: absolute;
  top: 32px;
  right: 123px;
}

.arow {
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-top: 14px;
  background-color: rgba(247, 247, 247, 1);
}
h4 {
  font-size: 17px;
  margin: 5px;
}
.caard img {
  width: 40%;
  padding-bottom: 10px;
  margin-left: 30px;
}
.cards {
  background-color: white;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.iteem h2 {
  background-color: rgba(97, 82, 141, 1);
  color: white;
  padding: 11px;
  border: 1px solid white;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  font-size: 22px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
}
.caard {
  margin-right: 39px;
  position: relative;
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
}
/* img {
  width: 175px;
} */
.iteem {
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 16px;
  width: 23.5%;
  border-radius: 23px;
  position: relative;
}
.iteem button {
  padding: 15px;
  border: none;
  border: 1px solid;
  border-color: rgba(164, 202, 114, 1);
  padding-left: 34%;
  padding-right: 34%;
  border-radius: 10px;
  margin-top: 13px;
  background-color: white;
  color: rgba(164, 202, 114, 1);
  font-size: 16px;
}
.iteem button:hover {
  background-color: rgba(164, 202, 114, 1);
  color: white;
}
.price {
  display: flex;
  gap: 11px;
  justify-content: right;
}
h3 {
  text-align: right;
  font-size: 24px;
  font-weight: bold;
}
h5 {
  text-decoration: line-through;
  margin-left: 21px;
}
.price p {
  font-weight: bold;
  font-size: 18px;
  color: rgba(164, 202, 114, 1);
}

.newpro {
  display: flex;
  justify-content: space-between;
  margin: 0 2.5%;
  margin-bottom: 1%;
}

.newpro h2 {
  font-size: 30px;
  font-weight: bold;
}

.newpro button {
  color: rgba(140, 136, 150, 1);
  background-color:rgba(247, 247, 247, 1);
  font-size: 20px;
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 10px;
  border-radius: 5px;
}
</style>