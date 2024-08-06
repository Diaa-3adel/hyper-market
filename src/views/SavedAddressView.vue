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
          <div class="buton" style="margin-right: 25%">
            <router-link to="/FavoriteView">
              <i class="fa-solid fa-bag-shopping"></i> طلباتــي
            </router-link>

            <router-link to="/AccSettingView">
              <i class="fa-regular fa-user"></i> اعدادات الحساب
            </router-link>

            <router-link to="/MyFavoriteView">
              <i class="fa-regular fa-heart"></i> قائمة مفضلاتي
            </router-link>

            <router-link to="">
              <i class="fa-solid fa-location-dot"></i> العناوين المحفوظة
            </router-link>

            <router-link style="color: red" to="">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> تسجيل الخروج
            </router-link>
          </div>
        </div>

        <div class="col-md-9 " style="margin-bottom: 12.5%;"  >
          <div class="fav mt-2 rounded p-2 adress">
            <h2 style="font-weight: bold; font-size: 25px">
              العناوين المحفوظة
            </h2>
           <router-link to="/AddNewAddressView"> <button>اضافة عنوان جديد</button></router-link>
          </div>

          <div class="row hover">
            
            
            <div class="col-lg-6 col-10 mt-4 ">
              <div
                class="form-group rounded p-3"
                style="padding: 20px 10px; background-color: white"
              >
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <img
                      width="40px"
                      src="../assets/Group 48097242.png"
                      alt=""
                    />
                    <h4
                      style="
                        display: inline;
                        font-weight: bold;
                        font-size: 20px;
                        margin: 15px;
                      "
                    >
                      عنوان المنزل
                    </h4>
                  </div>

                  <div style="margin-left: 11px">
                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/edit-2.png"
                      alt=""
                    />

                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/trash.png"
                      alt=""
                    />
                  </div>
                </div>
                <p style="margin-right: 8%; text-align: start; color: rgba(140, 136, 150, 1);">
                  طريق العروبة، 8334، الرحمانية، الرياض RHOC3233، 3233 <br> 12333، السعودية
                </p>

                <div class="random">
                  <div style="display: flex; margin-right: 48px">
                    <i
                      style="
                        font-size: 18px;
                        color: rgba(96, 91, 108, 1);
                        margin-left: 10px;
                      "
                      class="fa-regular fa-user"
                    ></i>
                    <h5 style="font-size: 17px">01203900909 , Ahmed Ali</h5>
                    <div>
                      <a
                        href=""
                        style="
                          margin-right: 260px;
                          text-decoration: underline;
                          color: rgba(96, 91, 108, 1);
                        "
                        >اجعل العنوان افتراضي</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-10 mt-4">
              <div
                class="form-group rounded p-3"
                style="padding: 20px 10px; background-color: white"
              >
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <img
                      width="40px"
                      src="../assets/Group 48097242.png"
                      alt=""
                    />
                    <h4
                      style="
                        display: inline;
                        font-weight: bold;
                        font-size: 20px;
                        margin: 15px;
                      "
                    >
                    منزلى 
                    </h4>
                  </div>

                  <div style="margin-left: 11px">
                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/edit-2.png"
                      alt=""
                    />

                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/trash.png"
                      alt=""
                    />
                  </div>
                </div>
                <p style="margin-right: 8%; text-align: start; color: rgba(140, 136, 150, 1);">
                  طريق العروبة، 8334، الرحمانية، الرياض RHOC3233، 3233 <br> 12333، السعودية
                </p>

                <div class="random">
                  <div style="display: flex; margin-right: 48px">
                    <i
                      style="
                        font-size: 18px;
                        color: rgba(96, 91, 108, 1);
                        margin-left: 10px;
                      "
                      class="fa-regular fa-user"
                    ></i>
                    <h5 style="font-size: 17px">01203900909 , Ahmed Ali</h5>
                    <div>
                      <a
                        href=""
                        style="
                        font-size: 16px;
                          margin-right: 250px;
                          color: rgba(164, 202, 114, 1);
                        "
                        >   العنوان الافتراضي <i style="font-size: 20px; margin: 5px;" class="fa-solid fa-check"></i> </a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-10 mt-4">
              <div
                class="form-group rounded p-3"
                style="padding: 20px 10px; background-color: white"
              >
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <img
                      width="40px"
                      src="../assets/Group 48097242.png"
                      alt=""
                    />
                    <h4
                      style="
                        display: inline;
                        font-weight: bold;
                        font-size: 20px;
                        margin: 15px;
                      "
                    >
                    عنوان عملي 
                    </h4>
                  </div>

                  <div style="margin-left: 11px">
                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/edit-2.png"
                      alt=""
                    />

                    <img
                      width="23px"
                      style="margin: 10px"
                      src="../assets/trash.png"
                      alt=""
                    />
                  </div>
                </div>
                <p style="margin-right: 8%; text-align: start; color: rgba(140, 136, 150, 1);">
                  طريق العروبة، 8334، الرحمانية، الرياض RHOC3233، 3233 <br> 12333، السعودية
                </p>

                <div class="random">
                  <div style="display: flex; margin-right: 48px">
                    <i
                      style="
                        font-size: 18px;
                        color: rgba(96, 91, 108, 1);
                        margin-left: 10px;
                      "
                      class="fa-regular fa-user"
                    ></i>
                    <h5 style="font-size: 17px">01203900909 , Ahmed Ali</h5>
                    <div>
                      <a
                        href=""
                        style="
                          margin-right: 260px;
                          text-decoration: underline;
                          color: rgba(96, 91, 108, 1);
                        "
                        >اجعل العنوان افتراضي</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>





        
          </div>
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
        item: [{ label: " الرئيسية" }, { label: "العناوين المحفوظة " }],
    };
  },
  components: {
    NavbarView,
    Breadcrumb,
  },
};
</script>

<style scoped>
.form-group:hover{
    border:1px solid rgba(164, 202, 114, 1);
}
.adress {
  text-align: start;
  display: flex;
  justify-content: space-between;
}
.adress button {
  background-color: rgba(164, 202, 114, 1);
  color: white;
  border-radius: 10px;
  padding: 15px;
  padding-left: 35px;
  padding-right: 35px;
  border: none;
}
.buton a:hover {
  border: 1px solid rgba(164, 202, 114, 1);
}
a {
  text-decoration: none;
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
}

label {
  padding: 13px;
  font-size: 20px;
}
</style>