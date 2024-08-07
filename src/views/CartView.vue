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
              <h2 style="text-align: right; font-size: 21px">
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

            <h2 style="font-size: 18px">
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
                
              "
            >
              حســـاب جديد
            </button>
          </router-link>
          </Dialog>

       
<!-- =============== -->




          <Dialog
              v-model:visible="visible2"
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
              <input style="padding: 11px; width: 100%" type="text" />
              
              <button @click="visible3 = true; visible2 = false"
                style="
                 border: none;
                 background-color: white;
                 color: black;
                margin-right:68%;
                "
              
                >نسيــت كلمــة المرور ؟</button
              >

              <router-link to="/ConfirmView">
              <button @click=" show()" style="width: 100%; margin-top: 10px">
                تسجيل الدخول
              </button></router-link>

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
            


<!-- ==================== -->
            <Dialog
              v-model:visible="visible3"
              modal
              style="
                background-color: white;
                box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
                border-radius: 15px;
                padding: 25px;
                width: 30%;
              "
            >
              <h2 >نسيت كلمة المرور </h2>
              <p style="font-size: 17px;">ادخل رقم الهاتف او البريد الالكترونى الذي قمت بالتسجيل به لاستقبال كود مكون من 4 ارقام لاعادة كلمة المرور</p>
           
              <h2 style="margin: 5% 0;">رقم الهاتف او البريد الالكترونى</h2>
              <input style="padding: 11px; width: 100%" type="text" />
              
       
              <button   @click="visible4 = true; visible3 = false"
               style="width: 100%; margin-top: 20px">
                ارسال الكود
              </button>
          
         
            </Dialog>
<!-- =============== -->
            <Dialog
              v-model:visible="visible4"
              modal
              style="
                background-color: white;
                box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
                border-radius: 15px;
                padding: 25px;
                width: 30%;
              "
            >
              <h2 >استرجاع كلمة المرور </h2>
              <p style="font-size: 17px;">ادخل الكود المكون من 4 ارقام المرسل الى someone@gmail.com</p>
          
              <div class="card flex justify-center">
        <InputOtp  v-model="value" />
    </div>
              
              
              <button   @click="visible5 = true; visible4 = false"
               style="width: 100%; margin-top: 20px">
                ارسال الكود
              </button>
      
            </Dialog>
<!-- =============== -->

            <Dialog
              v-model:visible="visible5"
              modal
              style="
                background-color: white;
                box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
                border-radius: 15px;
                padding: 25px;
                width: 30%;
              "
            >
              <h2  >كلمة المرور الجديدة   </h2>
              <p style="font-size: 17px;"> كلمة المرور الجديدة يجب انت تحتوي على الاقل على 8 رموز مكونة من حروف وارقام </p>
           
              <h2 style="margin: 3% 0; font-weight: bold; font-size: 1.4rem;"> كلمة المرور</h2>
              <input style="padding: 11px; width: 100%" type="text" />
              
              <h2 style="margin: 3% 0; font-size: 1.4rem; font-weight: bold;"> اعادة كلمة المرور </h2>
              <input style="padding: 11px; width: 100%" type="text" />
              
       
              <button   
               style="width: 100%; margin-top: 20px">
                ارسال الكود
              </button>
          
         
            </Dialog>
<!-- =============== -->


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

import InputOtp from 'primevue/inputotp';

// const useStore = useCounterStore();
import Swal from "sweetalert2";

export default {
  data() {
    return {
      value: null,
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      delivery: 20,
      tax: 5,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count", "items", "cartItem"]),
  },

  methods: {
    show(){

Swal.fire({
position: "top-center",
icon: "success",
title: "لقد تم تسجيل دخولك بنجاح",
showConfirmButton: false,
timer: 1500
});



},
    showSecondDilog() {
      this.visible = false;
      this.visible2 = true;
    },

    showThirdDilog() {
      this.visible2 = false;
      this.visible3 = true;
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
  components: { NavbarView, Dialog , InputOtp },
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