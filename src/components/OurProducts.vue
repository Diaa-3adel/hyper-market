
 
<template>
  <h1 style="text-align: right; margin-right: 45px">منتجــــــاتنا</h1>

  <div class="caard">
    <div class="iteem" v-for="(item, index) in items" :key="index">
      <h2>{{ item.brand }}</h2>

      <div class="try">
        <img
          :src="item.image || '@/assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png'"
          alt=""
        />
      </div>

      <div class="eye" @click="visible = true">
        <i class="fa-regular fa-eye"></i>
      </div>
      
      
      
      <Dialog
        v-model:visible="visible"
        modal
        :style="{ width: '75rem' }"
        style="
          background-color: white;
          padding: 20px;
          box-shadow: 4px 5px 5px #aaaaaa;
          border-radius: 15px;
        "
      >
        <div>
          <h2>تفاصيل المنتج</h2>

          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <img
                  width="227px"
                  src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"
                  alt=""
                />

                <div style="display: flex">
                  <img
                    width="100px"
                    height="100px"
                    src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"
                    alt=""
                  />
                  <img
                    width="100px"
                    height="100px"
                    src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"
                    alt=""
                  />
                  <img
                    width="100px"
                    height="100px"
                    src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"
                    alt=""
                  />
                </div>


                <div class=" flex justify-center">
        <VirtualScroller :items="items" :itemSize="50" class="border border-surface-200 dark:border-surface-700 rounded" style="width: 320px; height: 300px">
            <template >
             
                <div :class="['flex items-center p-2', { 'bg-surface-100 dark:bg-surface-700': options.odd }]" style="height: 50px">
                 
                </div>
            </template>
        </VirtualScroller>
    </div>


              </div>

              <div class="col-md-8" style="padding-right: 4%;">
                <h2>{{ item.description }}</h2>
                <p>حوالي 600 جرام - 650 جرام للقطعة الواحدة</p>

                <div style="display: flex; gap: 15px">
                  <p style="text-decoration: line-through">
                    {{ item.originalPrice }}
                  </p>
                  <h3 style="color:  rgba(164, 202, 114, 1);">{{ item.originalPrice }} SAR</h3>
                  <p>شامل قيمة الضريبة</p>
                </div>
                <h2 style="margin: 10px">تفاصيل المنتج</h2>
                <p style="font-size: 22px">
                  12 كيلو مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد ,,
                  12 كيلو مانجو سيكو المواصفات
                </p>

                <div class="inp" style="margin-left: 31%">
                  <h2>نوع الفاكهه</h2>

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >فاكهه طازجه</label
                  >

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >فاكهه طازجه</label
                  >

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >فاكهه طازجه</label
                  >

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >فاكهه طازجه</label
                  >

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >فاكهه طازجه</label
                  >
                </div>
               
               
                <div style="margin-left: 30px">
                  <h2>الشراء بــــ</h2>
                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for=""
                    >الكيـــلو</label
                  >

                  <input type="radio" />
                  <label style="padding: 13px; font-size: 20px" for="">
                    الجــملــه</label
                  >
                </div>

                <button class="btn"><i class="fa-solid fa-cart-shopping"></i> اضف الى السلة</button>

              </div>
            </div>
          </div>
        </div>
      </Dialog>

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
      <div v-if="count > 0" style="display: inline">
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

 
</template>

<script>


import VirtualScroller from 'primevue/virtualscroller';

import "primeicons/primeicons.css";
import Dialog from "primevue/dialog";
// import Swal from 'sweetalert2'

import { useCounterStore } from "@/store/Counter";

import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      visible: false,

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
          image: require("../assets/bc599f468ec1cfb6da1d0fd808601971.png"),
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
          image: require("../assets/bc599f468ec1cfb6da1d0fd808601971.png"),
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
          image: require("../assets/bc599f468ec1cfb6da1d0fd808601971.png"),
          originalPrice: "48.30",
          discountedPrice: "40.30",
          rating: "4.0",
          description: "كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها",
          details: "500 جرام مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد",
          count: 0,
        },
        {
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
          id: 11,
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
          id: 12,
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
          id: 13,
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
          id: 14,
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
          id: 15,
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
          id: 16,
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
  components: {
    Dialog,
    VirtualScroller
  },

  computed: {
    ...mapState(useCounterStore, ["addItem"]),
  },
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
    increment(index) {
      this.items[index].count++;
    },
    ...mapActions(useCounterStore, ["addItem"]),
  },
};
</script>

<style scoped>
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
/* img {
  width: 175px;
} */
.iteem {
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 16px;
  width: 22%;
  border-radius: 23px;
  position: relative;
}
.iteem button {
  padding: 15px;
  border: none;
  border: 1px solid;
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
</style>