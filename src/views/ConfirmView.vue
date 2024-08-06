<template >
  <navbar-view></navbar-view>

  <div
    class="flex justify-center"
    style="background-color: rgba(247, 247, 247, 1); padding: 9px"
  >
    <Breadcrumb
      style="margin-right: 140px; border: none; padding: 10px"
      :home="home"
      :model="items"
    />
  </div>
  <div class="page">
    <div
      class="container-fluid"
      style="background-color: rgba(245, 245, 245, 1)"
    >
      <div class="row justify-content-between">
        <div class="col-md-8 p-4 bg-white rounded" style="margin-right: 3%">
          <h2 style="text-align: right; margin-right: 0; margin-bottom: 2%;">التوصيل إلي</h2>
          <div
            style="
              border: 1px solid rgba(217, 217, 217, 1);
              padding: 4px;
              border-radius: 15px;
              display: flex;
              justify-content: space-between;
            "
          >
            <p style="text-align: right; margin: 15px">
              طريق العروبة، 8334، الرحمانية، RHOC3233، 3233 <br />الرياض 12333،
              السعوديه
            </p>
            <p style="text-align: right; margin: 15px">
              تغيير <i class="fa-solid fa-angle-left"></i>
            </p>
          </div>

          <hr />

          <div class="pay">
            <h2>تفاصيل الدفع</h2>
            <p>
              اختر طريقة الدفع المناسبة لك ثم اضغط على تأكيد الدفع لتأكيد عملية
              الشراء
            </p>
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="" class="form-label text-start my-2">
                    المحــافظه
                    <p style="color: red; display: inline">*</p></label
                  >

                  <input type="text" name="" id="" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="" class="form-label text-start my-2"
                    >المديــنة
                    <p style="color: red; display: inline">*</p></label
                  >
                  <input type="text" name="" id="" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="" class="form-label text-start my-2"
                    >المديــنة
                    <p style="color: red; display: inline">*</p></label
                  >
                  <input type="text" name="" id="" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="" class="form-label text-start my-2"
                    >المديــنة
                    <p style="color: red; display: inline">*</p></label
                  >
                  <input type="text" name="" id="" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <div class="form-group">
                  <label for="" class="form-label text-start my-2"
                    >تفاصيــل العنـوان
                    <p style="color: red; display: inline">*</p></label
                  >
                  <input
                    style="width: 204%; height: 100px"
                    type="text"
                    name=""
                    id=""
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="buttons">
              <button>
                <img
                  src="../assets/e138796e0c4ff055d377e8275416627f.png"
                  alt=""
                />
              </button>

              <button>
                <img
                  src="../assets/dbeea2684c3bc207a4bc7f251c04a576.png"
                  alt=""
                />
              </button>

              <button>
                <img
                  src="../assets/abbbf6a24f4525df44a9a423329b76ab.png"
                  alt=""
                />
              </button>

              <button>
                <img
                  src="../assets/76614e449e349c8b40abf9c81459cfe4.png"
                  alt=""
                />
              </button>
            </div>

            <h2>رقم البطاقة</h2>
            <input
              class="form-control"
              type="text"
              style="
                border: 1px solid rgba(217, 217, 217, 1);
                border-radius: 5px;
             
                margin-top: 20px;
              "
            />

<div class="row">


            <div class="col-lg-6 col-12 mt-4">
            
                <div class="form-group">
                    <label class="text-start  mb-3" for="">تاريخ الانتهاء</label>
            <input type="text" class="form-control">
                </div>
            </div>
            <div class="col-lg-6 col-12 mt-4">
            
            <div class="form-group">
        <label class="text-start mb-3" for="">( رمز التحقق ) CVC</label>
        <input type="text" class="form-control">
            </div>
        </div>
    </div>

            

            <div class="in">
              <router-link to="/SuccessPay"
                ><button>تأكــيد الشراء</button>
              </router-link>
            </div>
          
        
        </div>

        </div>

        <div class="col-md-3 bg-white p-4 rounded" style="margin-left: 2%; height:fit-content">
          <h3 style="font-weight: bold; text-align: right">تفاصيل الطلب</h3>

          <div style="display: flex">
            <img
              src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png"
              width="100px"
              alt=""
            />
            <p
              style="
                text-align: right;
                margin-right: 6px;
                margin-top: 20px;
                font-size: 17px;
              "
            >
              كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها
            </p>
            <h3 style="font-size: 15px; margin-top: 23px">2X</h3>
          </div>
          <h2>48.25 ر.س</h2>

          <div style="display: flex">
            <img
              src="../assets/4c0fa2636ce2d86369426687cf0748a2.png"
              width="100px"
              alt=""
            />
            <p
              style="
                text-align: right;
                margin-top: 20px;
                font-size: 17px;
                margin-right: 6px;
              "
            >
              كرتونة من المانجو معبأة بطريقة صحيحة للحفاظ عليها
            </p>
            <h3 style="font-size: 15px; margin-top: 23px">2X</h3>
          </div>
          <h2>48.25 ر.س</h2>

          <hr />

          <div class="total" style="margin-top: 6%">
            <div style="display: flex; justify-content: space-between">
              <h3>سعر المنتجــات</h3>
              <h3 style="font-weight: bold">48.65 SAR</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>سعر التوصيــل</h3>
              <h3 style="font-weight: bold">{{ delivery }} SAR</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>ضريبــة</h3>
              <h3 style="color: red; font-weight: bold">SAR {{ tax }}</h3>
            </div>
            <hr />
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding: 10px;
              "
            >
              <h3>اجمالـى السعـر</h3>
              <h3 style="font-weight: bold">100.00 SAR</h3>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import Breadcrumb from "primevue/breadcrumb";

export default {
  data() {
    return {
      visible: false,
      items: [
        { label: " الرئيسية" },
        { label: "  سلة التسوق" },
        { label: " متابعة الشراء" },
      ],
      delivery: 20,
      tax: 5,
    };
  },
  components: {
    NavbarView,
    Breadcrumb,
  },

  methods: {
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
  },
};
</script>

<style scoped>
.in button {
  width: 100%;
  padding: 20px;
  margin-top: 2%;
  margin-left: 2%;
}
.in input {
  width: 48%;
  padding: 15px;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 5px;
  margin-left: 23px;
  margin-top: 2%;
}
.buttons img {
  width: 170px;
  height: 120px;
  padding: 30px;
}
.buttons button {
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: white;
  padding-left: 53px;
  padding-right: 55px;
  margin: 2%;
  margin-right: 0;
  text-align: right;
}

.buttons button:hover {
  border: 1px solid rgba(164, 202, 114, 1);
}

.pay h2 {
  text-align: right;
  color: black;
  margin-right: 0;
  font-size: 24px;
  font-weight: bold;
}

.pay p {
  margin-right: 0;
  text-align: right;
  color: rgba(140, 136, 150, 1);
}
h2 {
  text-align: right;
  margin-right: 24%;
  font-size: 20px;
  color: rgba(164, 202, 114, 1);
}
button {
  background-color: rgba(164, 202, 114, 1);
  border: none;
  border-radius: 10px;
  color: white;
}
h3 {
  font-size: 20px;
}
.text-start {
  text-align: start !important;
  width: 100%;
}
</style>