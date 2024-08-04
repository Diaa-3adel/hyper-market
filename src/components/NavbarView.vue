<template>
  <div class="subNav">
    <div class="right">


  <h2>التوصيــل إلي <a   href="">حدد موقعك</a></h2>
  

    
    
    </div>

    <div class="left" style="margin-top: 10px">
      <a href=""
        >English <img src="../assets/flag-button-round-250.png" alt="" />
      </a>

      <a style="border-left: 1px solid black" href="">EGP</a>
      <a style="border-right: 1px solid black" href="">اتـصل 16666</a>
    </div>
  </div>

  <div class="nav py-4">
    
    <div class="right" style="display: flex;;">
      <img src="../assets/logo.png" alt="" />
      <input type="text" class="form-control" placeholder=" ابحث باسم المنتج ..." />


      <a href=""
        ><button>
          <i
            style="font-size: 30px"
            class="fa-solid fa-magnifying-glass"
          ></i></button
      ></a>
    </div>

    <div class="leftt">
      <Button @click="visible2 = true"
        ><i
          style="border: 1px solid black; border-radius: 50px; padding: 3px"
          class="fa-regular fa-user"
        ></i
        >تسجيل الدخول</Button
      >

      <Dialog
        v-model:visible="visible2"
        modal
        style="
          background-color: white;
          box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
          padding: 25px;
          width: 30%;
        "
      >
        <h2>تسجيل الدخول</h2>
        <p>من فضلك قمك بتسجيل الدخول لاستكمال عملية الشراء</p>
        <h2 style="font-size: 15px; font-weight: bold; margin-top: 15px">
          رقم الهاتف او البريد الالكترونى
        </h2>
        <input
          class="form-control mt-2"
          style="padding: 11px; width: 100%"
          type="text"
        />
        <button
          @click="
            visible3 = true;
            visible2 = false;
          "
          style="
            width: 100%;
            margin-top: 10px;
            background-color: #a4ca72;
            border: none;
            color: white;
            padding: 11px;
            border-radius: 8px;
          "
        >
          تسجيل الدخول
        </button>

        <div style="display: flex">
          <div style="margin: auto; margin-top: 15px; margin-bottom: 15px">
            ليس لديك حســـاب
          </div>
        </div>

        <router-link to="/RegisterView">
          <button
            style="
              width: 100%;
              border: 1px solid #a4ca72;
              background-color: white;
              color: #a4ca72;

              padding: 11px;
              border-radius: 8px;
            "
          >
            حســـاب جديد
          </button>
        </router-link>
      </Dialog>

      <Dialog
        v-model:visible="visible3"
        modal
        style="
          width: 100%;
          background-color: white;
          box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
          padding: 25px;
          width: 30%;
        "
      >
        <h2>تسجيل الدخول</h2>
        <p>من فضلك قمك بتسجيل الدخول لاستكمال عملية الشراء</p>
        <h2 style="font-size: 15px; font-weight: bold; margin-top: 15px">
          كلمــه المرور
        </h2>
        <input class="form-control" style="padding: 11px; width: 100%" type="text" />

        <button
          @click="
            visible3 = true;
            visible2 = false;
          "
          style="
            border: none;
            background-color: white;
            color: black;
            margin-right: 70%;
            margin-top: 5px;
          "
        >
          نسيــت كلمــة المرور ؟
        </button>
        <button   style="
            width: 100%;
            margin-top: 10px;
            background-color: #a4ca72;
            border: none;
            color: white;
            padding: 11px;
            border-radius: 8px;
          ">تسجيل الدخول</button>
        <div style="display: flex">
          <div style="margin: auto; margin-top: 15px; margin-bottom: 15px">
            ليس لديك حســـاب
          </div>
        </div>
        <router-link to="/RegisterView">
          <button
          style="
              width: 100%;
              border: 1px solid #a4ca72;
              background-color: white;
              color: #a4ca72;

              padding: 11px;
              border-radius: 8px;
            "
          >
            حســـاب جديد
          </button>
        </router-link>
      </Dialog>

      <button
        @click="
          visible = true;
          getItems();
        "
        style="border-right: 1px solid black"
      >
        <i class="fa-solid fa-cart-shopping"></i> السله ({{ cartItem.length }} )
      </button>

      <Dialog
        v-if="showDialog"
        v-model:visible="visible"
        :position="position"
        :modal="true"
        :draggable="false"
        style="
          background-color: white;
          box-shadow: 8px 8px 8px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
          height: 950px;
        "
        class="p-3"
      >
        <h2 style="background-color: rgba(164, 202, 114, 1)">السلة</h2>
        <h3>كل المنتجات ({{ cartItem.length }})</h3>
        <div class="cards" v-for="item in items" :key="item.id">
          <div style="display: flex">
            <img :src="item.image" alt="" />
            <div style="display: flex; flex-direction: column">
              <h5>{{ item.description }}</h5>
              <p>{{ item.details }}</p>
              <h3 style="color: rgba(164, 202, 114, 1)">
                {{ item.originalPrice }} ر.س
              </h3>
              <hr />
            </div>
          </div>
          <hr />
        </div>

        <h2>تفاصيل السعر</h2>

        <div style="display: flex; justify-content: space-between">
          <h4>سعر المنتجات</h4>
          <h4>{{ calculateTotal() }} ر.س</h4>
        </div>

        <div style="display: flex; justify-content: space-between">
          <h4>سعر التوصيل ( لم يحدد بعد )</h4>
          <h4>تحديد العنوان</h4>
        </div>

        <div style="display: flex; justify-content: space-between">
          <h4>خصم</h4>
          <h4 style="color: red">SAR {{ discount }}</h4>
        </div>
        <hr />

        <div style="display: flex; justify-content: space-between">
          <h4>اجمالي السعر</h4>
          <h4>{{ calculateAllTotal() }} ر.س</h4>
        </div>
        <div class="arow">
          <h4>لديك كوبون خصم</h4>
          <a style="color: black" href="">
            <i style="margin-top: 10px" class="fa-solid fa-chevron-left"></i
          ></a>
        </div>

        <router-link to="/CartView">
          <button
            style="
              background-color: rgba(164, 202, 114, 1);
              border: none;
              color: white;
              width: 80%;
              margin-right: 6%;
              padding: 3%;
              margin-top: 35px;
              border-radius: 15px;
            "
          >
            تأكــيد الشراء
          </button>
        </router-link>
      </Dialog>

      <router-link to="/FavoriteView" style="border-right: 1px solid black" href=""
        ><i class="fa-regular fa-heart"></i>قائمه المفضله</router-link
      >
    </div>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import { useCounterStore } from "@/store/Counter";
import { mapActions, mapState } from "pinia";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      position: "right",
      visible: false,
      visible2: false,
      visible3: false,
      discount: -5,
      showDialog: true,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count", "items", "cartItem"]),
  },
  methods: {
    calculateAllTotal() {
      const productTotal = this.items.reduce(
        (acc, item) => acc + parseFloat(item.originalPrice),
        0
      );
      const TotalWithAll = Math.round(productTotal + this.discount);
      return TotalWithAll;
    },

    openPosition(position) {
      this.position = position;
      this.visible = true;
    },
    calculateTotal() {
      const productTotal = this.items.reduce(
        (acc, item) => acc + parseFloat(item.originalPrice),
        0
      );
      console.log(productTotal);
      return productTotal;
    },
    addProduct() {
      this.type++;
    },
    ...mapActions(useCounterStore, ["increment"]),
    ...mapActions(useCounterStore, ["getItems"]),
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
p {
  font-size: 17px;
}
h5 {
  font-weight: bold;
  font-size: 22px;
  margin: 5px;
}
h4 {
  font-size: 20px;
  margin: 5px;
}
.cards img {
  width: 13%;
  margin-left: 30px;
}
.cards {
  background-color: white;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.leftt button {
  border: none;
  background: white;
}
.subNav {
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
}
.right {
  font-size: 13px;
  color: #8c8896;
  margin-right: 7%;
  padding: 8px;
}
.right a {
  color: #a4ca72;
  text-decoration: none;
}
.left a {
  margin: 3px;
  padding: 6px;
  text-decoration: none;
  color: #000;
}
.left img {
  width: 20px;
  /* margin-top: 10px; */
  /* padding-top: 7px; */
}
.left {
  margin-left: 6%;
  padding: 9px;
}

.right img {
  width: 8%;
  margin-left: 2%;
}

.nav input {
  /* width: 640px; */
  height: 60px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  margin-top: 2%;
  padding-right: 350px;



  /* z-index: -99999999999999999; */
}

  .right button {
    background-color: #a4ca72;
    color: white;
    margin-top: 25px;
    width: 61px;
    height: 61px;
    border: none;
    border-radius: 15px;
 
  
    
  }

.nav {
  display: flex;
  justify-content: space-between;

  /* margin-right: 2%; */
  padding-right: 0%;
}
.leftt {
  margin-top: 2%;
  margin-left: 6%;
}
.leftt a {
  margin: 5px;
  padding: 10px;
  margin-left: 5px;
  text-decoration: none;
  color: #000;
}
.leftt i {
  margin-left: 10px;
}
</style>