<template>
  <div class="subNav">
    <div class="right">
      <h2>التوصيــل إلي <a href="">حدد موقعك</a></h2>
    </div>
    <div class="left" style="margin-top: 10px">
      <a href=""
        >English <img src="../assets/flag-button-round-250.png" alt="" />
      </a>
      <a href="">EGP</a>
      <a href="">اتـصل 16666</a>
    </div>
  </div>

  <div class="nav py-4">
    <div class="right" style="display: flex">
      <img src="../assets/logo.png" alt="" />
      <input type="search" placeholder=" ابحث باسم المنتج ..." />

      <a href=""
        ><button><i class="fa-solid fa-magnifying-glass"></i></button
      ></a>
    </div>
    <div class="leftt">
      <a href=""
        ><i
          style="border: 1px solid black; border-radius: 50px"
          class="fa-regular fa-user"
        ></i
        >تسجيل الدخول</a
      >
      <button @click="visible = true" style="border-right: 1px solid black">
        <i class="fa-solid fa-cart-shopping"></i> السله ( {{ count }} )
      </button>

      <Dialog
        v-model:visible="visible"
        :position="position"
        :modal="true"
        :draggable="false"
        style="
          background-color: white;
          box-shadow: 8px 8px 8px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
        "
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

          <!-- <p  style=" font-size: 17px; ">
              50 جرام مانجو سيكو المواصفات نبات صيني بدون <br />
              سكر عضوي مجمد
            </p> -->
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
          <h4>كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها</h4>
        </div>
        <h3 style="color: rgba(164, 202, 114, 1); margin-right: 18%">
          50.12 ر.س
        </h3>
        <hr />
        <h2>تفاصيل السعر</h2>

        <div style="display: flex; justify-content: space-between">
          <h4>سعر المنتجات</h4>
          <h4>80.65 SAR</h4>
        </div>

        <div style="display: flex; justify-content: space-between">
          <h4>سعر التوصيل ( لم يحدد بعد )</h4>
          <h4>تحديد العنوان</h4>
        </div>

        <div style="display: flex; justify-content: space-between">
          <h4>خصم</h4>
          <h4 style="color: red">SAR -5</h4>
        </div>
        <hr />

        <div style="display: flex; justify-content: space-between">
          <h4>اجمالي السعر</h4>
          <h4>100.65 SAR</h4>
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

      <a style="border-right: 1px solid black" href=""
        ><i class="fa-regular fa-heart"></i>قائمه المفضله</a
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
      
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },
  methods: {
    openPosition(position) {
      this.position = position;
      this.visible = true;
    },
    addProduct() {
      this.type++;
    },
    ...mapActions(useCounterStore, ["increment"]),
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
  /* gap: 20px; */
}
.right a {
  color: #a4ca72;
  text-decoration: none;
}
.left a {
  border-right: 1px solid black;
  margin: 3px;
  padding: 3px;
  margin-top: 3px;
  text-decoration: none;
  color: #000;
}
.left img {
  width: 20px;
  /* margin-top: 10px; */
  /* padding-top: 7px; */
}
.left {
  margin-left: 5%;
}

.right img {
  width: 10%;
  margin-left: 6%;
}

.nav input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
  margin-top: 2%;
}

.right button {
  background-color: #a4ca72;
  color: white;
  margin-top: 20px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;

  margin-right: 2%;
  padding-right: 3%;
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