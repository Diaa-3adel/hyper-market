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
            كل المنتجات (2)
          </h2>

          <div class="cards">
            <img
              src="../assets/bc599f468ec1cfb6da1d0fd808601971.png"
              width="5px"
              alt=""
            />
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
                  background-color: rgba(238, 37, 39, 1);
                  border-radius: 60%;
                  padding: 2px 8px;
                "
              >
                x
              </a>
            </h2>
          </div>
          <hr />
          <div class="cards">
            <img
              src="../assets/bc599f468ec1cfb6da1d0fd808601971.png"
              width="5px"
              alt=""
            />
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
          </div>
        </div>

        <div class="col-md-3 bg-white p-4 rounded">
          <h3 style="font-weight: bold; text-align: right">ملخص الطلب</h3>

          <div style="margin-left: 50%; display: flex">
            <input type="text" placeholder="لديك كوبون خصم" />
            <button>تطبيق</button>
          </div>

          <div class="total" style="margin-top: 6%">
            <div style="display: flex; justify-content: space-between">
              <h3>سعر المنتجات</h3>
              <h3>80.65 SAR</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>سعر التوصيل</h3>
              <h3>20 SAR</h3>
            </div>

            <div style="display: flex; justify-content: space-between">
              <h3>ضريبة</h3>
              <h3 style="color: red">SAR -5</h3>
            </div>
            <hr />
            <div style="display: flex; justify-content: space-between">
              <h3>اجمالى السعر</h3>
              <h3 style="font-weight: bold">100.39 SAR</h3>
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
            header="Edit Profile"
            :style="{ width: '25rem' }"
          >
            <span class="text-surface-500 dark:text-surface-400 block mb-8"
              >Update your information.</span
            >
            <div class="flex items-center gap-4 mb-4">
              <label for="username" class="font-semibold w-24">Username</label>
              <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
              <label for="email" class="font-semibold w-24">Email</label>
              <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  </div>

  <h2>Counter : {{ count }}</h2>
  <button @click="increment()">Increment</button>
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
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },

  methods: {
    ...mapActions(useCounterStore, ["increment"]),
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