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
        <div class="col-md-3">
          <div class="buton mt-3" style="margin-right: 25%">
            <router-link to="/FavoriteView">
              <i class="fa-solid fa-bag-shopping"></i> طلباتــي
            </router-link>

            <router-link to="/AccSettingView">
              <i class="fa-regular fa-user"></i> اعدادات الحساب
            </router-link>

            <router-link to="/MyFavoriteView">
              <i class="fa-regular fa-heart"></i> قائمة مفضلاتي
            </router-link>

            <router-link to="/SavedAddressView">
              <i class="fa-solid fa-location-dot"></i> العناوين المحفوظة
            </router-link>

            <router-link style="color: red" to="">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> تسجيل الخروج
            </router-link>
          </div>
        </div>

        <div class="col-md-9">
          <div
            class="fav mt-2 rounded p-2"
            style="text-align: start; background-color: white; width: 97%"
          >
            <h2 style="margin-right: 3%">اعدادات الحساب</h2>

            <div class="user mt-5" style="display: flex">
              <div style="margin: 10px">
                <img width="150px" src="../assets/user (1) 1.png" alt="" />
              </div>

              <div class="co-12 col-lg-10 p-4">
                <h2>اسم المستخدم</h2>
                <input
                  style="padding: 15px; width: 100%"
                  type="text"
                  class="form-control"
                  placeholder="الاسم كاملا"
                />
              </div>
            </div>

            <div class="row" style="margin-right: 13.2%">
              <div class="col-lg-6 col-10 mt-4">
                <div class="form-group">
                  <label class="text-start mb-3" for="">رقم الهاتف </label>
                  <input
                    style="padding: 15px"
                    type="text"
                    class="form-control"
                    placeholder="ادخل رقم الهاتف "
                  />
                </div>
              </div>
              <div class="col-lg-6 col-10 mt-4">
                <div class="form-group">
                  <label class="text-start mb-3" for=""
                    >البريد الالكترونى
                  </label>
                  <input
                    style="padding: 15px"
                    type="text"
                    class="form-control"
                    placeholder="someone@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div class="row mb-4" style="margin-right: 13.2%">
              <div class="col-6 mt-3">
                <label for="" class="mt-3">تاريخ الميلاد</label>
                <input
                  style="padding: 15px"
                  type="date"
                  class="form-control mt-3"
                />
              </div>

              <div class="col-6" style="margin-top: 3.7%">
                <label for=""> الـنوع</label>

                <div class="gender" style="margin: 15px">
                  <input
                    style="
                      margin-left: 25px;
                      width: 20px;
                      height: 30px;
                      margin-bottom: 5px;
                    "
                    type="radio"
                    name="gender"
                  />
                  <label
                    style="
                      margin-left: 25px;
                      font-size: 20px;
                      font-weight: bold;
                    "
                    for=""
                    >ذكر</label
                  >

                  <input
                    style="margin-left: 25px; width: 20px; height: 30px"
                    type="radio"
                    name="gender"
                  />
                  <label style="margin-left: 25px; font-size: 20px" for=""
                    >انثى
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            class="fav mt-2 rounded p-2 mb-5 mt-4"
            style="text-align: start; background-color: white; width: 97%"
          >
            <h2 style="margin-right: 3%; margin-top: 2%">اعدادات الأمان</h2>
            <div
              class="all"
              style="display: flex; justify-content: space-between"
            >
              <div>
                <p>البريد الالكترونى المسجل به هو someone@gmail.com</p>
                <p>كلمة المرور **************</p>
              </div>

              <div></div>
              <button @click="visible = true">
                تغير كلمة المرور
                <i style="margin: 15px" class="fa-solid fa-chevron-left"></i>
              </button>

              <Dialog
                v-model:visible="visible"
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
                <h2 style="font-size: 20px; font-weight: bold">
                  تغيير كلمة المرور
                </h2>
                <p style="font-size: 15px; color: rgba(140, 136, 150, 1)">
                  ادخل رقم الهاتف او البريد الالكترونى الذي قمت بالتسجيل به
                  لتغيير كلمة المرور
                </p>

                <h2 style="margin: 5% 0; font-size: 20px; font-weight: bold">
                  رقم الهاتف او البريد الالكترونى
                </h2>
                <input
                  style="padding: 11px; width: 100%"
                  type="text"
                  class="form-control"
                />

                <button
                  style="
                    width: 100%;
                    margin-top: 20px;
                    background-color: rgba(164, 202, 114, 1);
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                    border: none;
                  "
                >
                  ارسال الكود
                </button>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import Dialog from "primevue/dialog";

import NavbarView from "@/components/NavbarView.vue";
export default {
  data() {
    return {
      item: [{ label: " الرئيسية" }, { label: "اعدادات الحساب " }],
      visible: false,
    };
  },
  components: { NavbarView, Breadcrumb, Dialog },
};
</script>

<style scoped>
.all {
  margin-right: 3%;
}
.all button {
  border: none;
  background-color: white;
  margin-left: 3%;
  margin-top: 2%;
}
.buton i {
  margin-left: 25px;
}
.buton a {
  display: block;
  padding: 15px 20px;
  /* width: 30%; */
  background-color: white;
  border-radius: 10px;
  margin: 7px;
  margin-right: 7%;
  border: none;
  text-align: right;
  color: black;
  text-decoration: none;
}
.buton a:hover {
  border: 1px solid rgba(164, 202, 114, 1);
}
</style>