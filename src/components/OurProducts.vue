<template>
  <div style="display: flex; justify-content: space-between ;">

    <h1 style="text-align: right; margin-right: 45px">منتجــــــاتنا</h1>
    
    <div class="farms" style="display: flex; gap: 20px; margin-left: 3%; margin-top: 9px; margin-bottom: 2%;">
    <button>دينا فارم</button>
    <button>Flavour </button>
    <button>المراعي </button>
    <button>بريزيدنت </button>
    <button>جهينة </button>
    <button>بست </button>
    <button> كل الأصناف  <i style="padding-right: 10px" class="fa-solid fa-angle-down"></i></button>
    
    
  </div>
  
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
          >{{ item.rating }}</i>
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

    <Dialog
      v-model:visible="visible"
      modal
      :pt="{

root: 'border-none',

mask: {
    style: 'background-color: rgba(0, 0, 0, 0.7)',
}
}"
      :style="{ width: '75rem' }"
      style="
        background-color: white;
        padding: 20px;
        box-shadow: 1px 1px 1px #aaaaaa;
        border-radius: 15px;
      "
    >
      <div>
        <h2>تفاصيل المنتج</h2>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <img width="227px" :src="product.image" alt="" />

              <div style="display: flex">
                <img width="100px" height="100px" :src="product.image" alt="" />
                <img width="100px" height="100px" :src="product.image" alt="" />
                <img width="100px" height="100px" :src="product.image" alt="" />
              </div>






              <div class="card p-2 mt-2 rounded   ">


                <div class="newrate" style="display: flex; justify-content: space-between">
              <h2 style="font-size: 23px; font-weight: bold;">التقييمات ( 10)</h2>
              <button @click="visible2 = true, visible = false">اضف تقييما</button>
            </div>






              
              
              <div class="flex justify-center">
          
                  <VirtualScroller
                    :items="items"
                    :itemSize="60"
                    class="border border-surface-200 dark:border-surface-700 rounded"
                    style="width: 320px; height: 300px"
                  >
                    <template v-slot:header>
                      <div>
                        <h2 style="background-color: rgba(164, 202, 114, 1)">
                          السلة
                        </h2>
                 
                      </div>
                    </template>
                    <template v-slot:item="{ item, options }">
                      <img
                        width="100px"
                        height="100px"
                        :src="item.image"
                        :key="options.index"
                      />
                      <p>{{ item.description }}</p>
                    </template>
                  </VirtualScroller>
                </div>
              </div>
            </div>

            <div class="col-md-8" style="padding-right: 4%">
              <h2>{{ product.description }}</h2>
              <p>حوالي 600 جرام - 650 جرام للقطعة الواحدة</p>

              <div style="display: flex; gap: 15px">
                <p style="text-decoration: line-through">
                  {{ product.originalPrice }}
                </p>
                <h3 style="color: rgba(164, 202, 114, 1)">
                  {{ product.originalPrice }} SAR
                </h3>
                <p>شامل قيمة الضريبة</p>
              </div>
              <h2 style="margin: 10px">تفاصيل المنتج</h2>
              <p style="font-size: 22px">
                12 كيلو مانجو سيكو المواصفات نبات صيني بدون سكر عضوي مجمد ,, 12
                كيلو مانجو سيكو المواصفات
              </p>

              <div class="inp" style="margin-left: 32%">
                <h2>نوع الفاكهه</h2>

                <input type="radio" value="new" name="fruits" />
                <label for="">فاكهه طازجه</label>

                <input type="radio" value="new1" name="fruits" />
                <label for="">فاكهة مجففة </label>

                <input type="radio" value="new2" name="fruits" />
                <label for=""> فاكهة مثلجة</label>

                <input type="radio" value="new3" name="fruits" />
                <label for="">فاكهه طازجه</label>

                <input type="radio" value="new4" name="fruits" />
                <label for="">فاكهه طازجه</label>
              </div>

              <div style="margin-left: 30px">
                <h2>الشراء بــــ</h2>
                <input type="radio" value="new5" name="fruits" />
                <label for="">الكيـــلو</label>

                <input type="radio" value="new6" name="fruits" />
                <label for=""> الجــملــه</label>
              </div>

              <button
                class="btn"
                @click="
                  addItem(product);
                  showAlert();
                  visible = false;
                "
              >
                <i class="fa-solid fa-cart-shopping"></i> اضف الى السلة
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>

<!-- =========Dialog New Rate ======= -->

<Dialog
        v-model:visible="visible2"
        modal
        :pt="{

root: 'border-none',

mask: {
    style: 'background-color: rgba(0, 0, 0, 0.7)',
}
}"
        style="
          background-color: white;
          box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
          padding: 25px;
          width: 30%;
        "
      >
        <h2>اضافة تقييم جديد </h2>
        
        <div class=" flex justify-center">
        <Rating v-model="value"
        style="color: rgba(164, 202, 114, 1); font-size: 90px;     margin-right: 146px;
    margin-top: 36px;" />
    </div>

    <h2 style="font-size: 20px; font-weight: bold">اضافة تقييم</h2>
    <input type="text" class="form-control" style="width: 100%; padding: 70px;">

    <button class="send" @click="SendSuccses(),visible2 = false">ارسال</button>








      </Dialog>



    
  </div>
</template>

<script>
import VirtualScroller from "primevue/virtualscroller";

import Rating from 'primevue/rating';

import "primeicons/primeicons.css";
import Dialog from "primevue/dialog";
// import Swal from 'sweetalert2'

import { useCounterStore } from "@/store/Counter";

import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      value: null,
      visible: false,
      visible2: false,
      product: null,
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
    VirtualScroller,
    Rating,
  },

  computed: {
    ...mapState(useCounterStore, ["addItem"]),
  },
  methods: {
    SendSuccses(){
      Swal.fire({
        position: "top-center",
  icon: "success",
  title: "تـم إضافه تقـييمك بنــجاح ",
  showConfirmButton: false,
  timer: 1500
});
    },
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
    openDialogProduct(item) {
      this.visible = true;
      this.product = item;
    },
    ...mapActions(useCounterStore, ["addItem"]),
  },
};
</script>

<style scoped>
.send{
  border: 1px solid rgba(140, 136, 150, 1);
  background-color: rgba(164, 202, 114, 1);
  border: none;
  width: 100%;
  margin-top: 2%;
  color: white;
  padding: 13px;
  padding-left: 70px;
  padding-right: 70px;
  border-radius: 8px;
}
.newrate button{
  border: 1px solid rgba(140, 136, 150, 1);
background-color: white;
  color: rgba(140, 136, 150, 1) ;
  padding: 5px;
  padding-left: 20px;
  padding-right: 21px;
  border-radius: 8px;
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
  padding-left: 41px;
  padding-right: 41px;
  border-radius: 14px;
}

.btn:hover{
  background-color: white;
  color: rgba(164, 202, 114, 1);
  border: 1px solid rgba(164, 202, 114, 1);
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
  height: 150px;
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

  font-size: 20px;
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
  width: 22%;
  border-radius: 20px;
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
.farms button{
  font-size: 20px;
  font-weight: 400;
border: none;
background-color: white;
}
.farms button:hover{

  color: rgba(164, 202, 114, 1);
  }
</style >