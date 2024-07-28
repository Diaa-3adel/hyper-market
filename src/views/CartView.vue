<template>
  <navbar-view></navbar-view>
  <div class="content">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-8 bg-white p-4 rounded">
          <div class="all">
            <div class="free">
              <h2>احصل على الشحن المجانى عند شراءك بقيمة 200 SAR</h2>
            </div>
          </div>
          <div class="info">
            <h2 style="font-size: 17px">
              التوصيل الي RHOC3233، 3233 طريق العروبة، 8334، الرحمانية، الرياض
              12333، السعودية
            </h2>
            <h3 style="font-size: 17px">
              تغيير العنوان
              <a style="text-decoration: none" href="">
                <i
                  style="margin-top: 10px; display: contents; color: black"
                  class="fa-solid fa-chevron-left"
                ></i>
              </a>
            </h3>
          </div>
          <h2
            style="
              text-align: right;
              margin-right: 55px;
              margin-top: 15px;
              font-weight: bold;
              font-size: 20px;
            "
          >
            كل المنتجات ({{ cartItem.length }})
          </h2>

          <div v-for="item in items" :key="item.id" class="cards">
            <img :src="item.image" alt="" />
            <div
              style="display: flex; flex-direction: column; margin-left: 30%"
            >
              <h2 style="text-align: right; font-size: 25px">
                {{ item.description }}
              </h2>
              <h2
                style="
                  font-size: 20px;
                  color: #a4ca72;
                  font-weight: bold;
                  text-align: right;
                "
              >
                {{ item.originalPrice }}
              </h2>
            </div>

            <h2 style="font-size: 20px">
              المجموع 80.30 ر.س
              <span
                style="
                  text-decoration: none;
                  color: white;
                  background-color: rgba(238, 37, 39, 1);
                  border-radius: 60%;
                  padding: 1px 4px;
                "
              >
                <i @click="Delete(index)" class="fa-solid fa-xmark"></i>
              </span>
            </h2>
          </div>
          <hr />
          <!-- <div class="cards">
            <img :src="item.image"  alt="" />
            <div
              style="display: flex; flex-direction: column; margin-left: 30%"
            >
              <h2 style="text-align: right; font-size: 20px">
                كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها
              </h2>
              <h2 style="font-size: 20px; font-weight: bold; text-align: right">
                50.12 ر.س
              </h2>
            </div>

            <h2 style="font-size: 20px">
              المجموع 80.30 ر.س
              <a
                href="#"
                style="
                  text-decoration: none;
                  color: white;
                  background-color: red;
                  border-radius: 60%;
                  padding: 2px 8px;
                "
              >
                x
              </a>
            </h2>
          </div> -->
        </div>

        <div class="col-md-3 bg-white p-4 rounded">
          <h3 style="font-weight: bold; text-align: right">ملخص الطلب</h3>

          <div style="margin-left: 50%; display: flex">
            <input type="text" placeholder="لديك كوبون خصم" />
            <button>تطبيق</button>
          </div>

          <div class="total" style="margin-top: 6%">
            <div style="display: flex; justify-content: space-between">
              <h3>سعر المنتجــات</h3>
              <h3>{{ calculateTotal() }} ر.س</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>سعر التوصيــل</h3>
              <h3>{{ delivery }} SAR</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>ضريبــة</h3>
              <h3 style="color: red">SAR {{ tax }}</h3>
            </div>
            <hr />
            <div style="display: flex; justify-content: space-between">
              <h3>اجمالـى السعـر</h3>
              <h3 style="font-weight: bold">{{ calculateAllTotal() }} SAR</h3>
            </div>
          </div>

          <button
            @click="visible = true"
            style="
              padding: 13px;
              padding-left: 129px;
              padding-right: 129px;
              margin-top: 5%;
            "
          >
            تأكيد الشراء
          </button>

          <Dialog
            v-model:visible="visible"
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
            <input style="padding: 11px; width: 100%" type="text" />
            <button
              @click="showSecondDilog()"
              style="width: 100%; margin-top: 10px"
            >
              تسجيل الدخول
            </button>

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
                كلمــه المرور
              </h2>
              <input style="padding: 11px; width: 100%" type="text" />
              <a
                style="
                  text-decoration: none;
                  color: black;
                  text-align: left;
                  margin-top: 10px;
                  display: block;
                "
                href=""
                >نسيــت كلمــة المرور ؟</a
              >
              <button style="width: 100%; margin-top: 10px">
                تسجيل الدخول
              </button>
              <div style="display: flex">
                <div
                  style="margin: auto; margin-top: 15px; margin-bottom: 15px"
                >
                  ليس لديك حســـاب
                </div>
              </div>

              <button
                style="
                  width: 100%;
                  border: 1px solid #a4ca72;
                  background-color: white;
                  color: #a4ca72;
                "
              >
                حســـاب جديد
              </button>
            </Dialog>

            <div style="display: flex">
              <div style="margin: auto; margin-top: 15px; margin-bottom: 15px">
                ليس لديك حســـاب
              </div>
            </div>

            <button
              style="
                width: 100%;
                border: 1px solid #a4ca72;
                background-color: white;
                color: #a4ca72;
              "
            >
              حســـاب جديد
            </button>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import NavbarView from "@/components/NavbarView.vue";
import { useCounterStore } from "@/store/Counter";
import { mapActions, mapState } from "pinia";
// const useStore = useCounterStore();

export default {
  data() {
    return {
      visible: false,
      visible2: false,
      delivery: 20,
      tax: 5,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count", "items", "cartItem"]),
  },

  methods: {
    showSecondDilog() {
      this.visible = false;
      this.visible2 = true;
    },

    Delete(index) {
      this.items.splice(index, 1);
      localStorage.cartItem = JSON.stringify(this.items);
    },
    calculateTotal() {
      const productTotal = this.items.reduce(
        (acc, item) => acc + parseFloat(item.originalPrice),
        0
      );
      const TotalAll = Math.round(productTotal);
      console.log(productTotal);
      return TotalAll;
    },
    calculateAllTotal() {
      const productTotal = this.items.reduce(
        (acc, item) => acc + parseFloat(item.originalPrice),
        0
      );
      const TotalWithAll = Math.round(productTotal + this.delivery + this.tax);
      return TotalWithAll;
    },

    ...mapActions(useCounterStore, ["getItems"]),
  },

  mounted() {
    this.getItems();
  },
  components: { NavbarView, Dialog },
};
</script>


<style scoped>
.total h3 {
  font-size: 18px;
  margin-top: 3%;
}
button {
  background-color: #a4ca72;
  border: none;
  color: white;
  padding: 11px;
  border-radius: 8px;
}
input {
  background-color: rgba(247, 247, 247, 1);
  border: none;
  border-radius: 8px;
  padding-left: 95px;
}
.cards img {
  width: 13%;
  /* margin-left: 100px; */
}
.cards {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  background: rgba(245, 245, 245, 1);
  padding: 36px;
}
.info {
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: rgba(247, 247, 247, 1);
  padding: 20px;
  border-radius: 15px;
  margin-right: 40px;
  margin-top: 10px;
  display: flex;

  justify-content: space-between;
}
.free {
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 15px;
  margin-right: 40px;
  text-wrap: nowrap;

  border: 1px solid black;
}
.free h2 {
  font-size: 17px;
  text-align: right;
}
</style>