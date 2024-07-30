<template>
  <h1 style="text-align: right; margin-right: 45px">منتجــــــاتنا</h1>

  <div class="caard">
    <div class="iteem" v-for="(item, index) in items" :key="index">
      <h2>{{ item.brand }}</h2>
      <img
        :src="item.image || '@/assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png'"
        alt=""
      />
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
      <p style="font-size: 17px; text-align: right">{{ item.details }}</p>

      <button type="button" @click="addItem(item)">
        <i class="fa-solid fa-cart-shopping"></i>
        أضف الى السلة 
      </button>
      <div v-if="count > 0" style="display: inline; ">
        <i
          v-if="count > 0"
          style="border: 1px solid green; padding: 16px; border-radius: 8px"
          @click="decrement(item)"
          class="fa-solid fa-minus"
        ></i>

        <h3
          style="
            display: inline-block;
            padding: 13px;
            border-radius: 9px;
            border: 1px solid green;
          "
        >
          {{ count }}
        </h3>

        <i
          v-if="count > 0"
          style="border: 1px solid green; padding: 16px; border-radius: 8px"
          @click="increment(item)"
          class="fa-solid fa-plus"
        ></i>
      </div>
    </div>
  </div>

  <!-- <Dialog
        style="background-color: white"
        v-model:visible="visible"
        class="p-3"
      >
        <h2 style="background-color: rgba(164, 202, 114, 1)">السلة</h2>
        <h3>كل المنتجات (2)</h3>

        <div class="cards">
          <img
            src="../assets/bc599f468ec1cfb6da1d0fd808601971.png"
            width="5px"
            alt=""
          />
          <h4>كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها</h4>

   
        </div>
        <h3 style="color: rgba(164, 202, 114, 1); margin-right: 18%">
          50.12 ر.س
        </h3>
        <hr />
        <div class="cards">
          <img
            src="../assets/bc599f468ec1cfb6da1d0fd808601971.png"
            width="5px"
            alt=""
          />
          <h4 >كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها</h4>


        </div>
        <h3 style="color: rgba(164, 202, 114, 1); margin-right: 18%">
          50.12 ر.س
        </h3>
        <hr />
        <h2>تفاصيل السعر</h2>

          <div style="display: flex; justify-content: space-between">
            <h4>سعر المنتجات</h4>
            <h4 >80.65 SAR</h4>
          </div>

          <div style="display: flex; justify-content: space-between">
            <h4>سعر التوصيل ( لم يحدد بعد )</h4>
            <h4 >تحديد العنوان</h4>
          </div>

          <div style="display: flex; justify-content: space-between">
            <h4>خصم</h4>
            <h4 style="color: red"> SAR -5</h4>
          </div>
          <hr>

          <div style="display: flex; justify-content: space-between">
            <h4>اجمالي السعر </h4>
            <h4>100.65 SAR</h4>
        </div>
<div class="arow" >
  <h4>لديك كوبون خصم</h4>
 <a style="color: black;" href=""> <i style="margin-top: 10px;" class="fa-solid fa-chevron-left"></i></a>
</div>

<router-link to="/CartView">

  <button   style="  background-color: rgba(164, 202, 114, 1); color: white; width: 80%; margin-right:6%; padding: 2%; margin-top: 35px" >تأكــيد الشراء</button>
  
</router-link>

      </Dialog> -->
</template>

<script>
import "primeicons/primeicons.css";
// import Swal from 'sweetalert2'

import { useCounterStore } from "@/store/Counter";

import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      visible: false,
      items: [
        {
          id : 1,
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
          id : 2,
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
          id : 3,
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
          id : 4,
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
          id : 5,
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
          id : 6,
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
          id : 7,
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
          id : 8,
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
          id : 9,
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
          id : 10,
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
          id : 11,
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
          id : 12,
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
          id : 13,
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
        {
          id : 14,
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
        {
          id : 15,
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
        {
          id : 16,
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
  methods: {
    increment(index) {
      this.items[index].count++;
    },
    ...mapActions(useCounterStore, ["addItem", ]),
  },
};
</script>

<style scoped>
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
  padding-top: 8px;
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

  font-size: 20px;
  font-size: 22px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
}
.caard {
  position: relative;
  width: 100%;
  /* margin-right: 36px; */
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
}
img {
  width: 175px;
}
.iteem {
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 16px;
  width: 22%;
  border-radius: 20px;

  border-radius: 23px;
  position: relative;
}
.iteem button {
  padding: 15px;
  border-color: rgba(164, 202, 114, 1);
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 10px;
  margin-top: 13px;
  background-color: white;
  color: rgba(164, 202, 114, 1);
  font-size: 16px;
}
.price {
  display: flex;
  gap: 11px;
  justify-content: right;
}
h3 {
  text-align: right;
  font-size: 22px;
}
h5 {
  text-decoration: line-through;
}
.price p {
  font-weight: bold;
  font-size: 18px;
  color: rgba(164, 202, 114, 1);
}
</style >