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
        <div
          class="col-lg-6 col-12 p-3 rounded"
          style="background-color: white; margin-right: 7.5%"
        >
          <h2 style="text-align: start">اضافة عنوان جديد</h2>

          <div class="row">
            <div class="col-lg-6 col-12">
              <label for="">
                المحافظة
                <p style="color: red; display: inline">*</p></label
              >
              <input type="text " class="form-control p-2" />
            </div>

            <div class="col-lg-6 col-12">
              <label for=" ">
                المدينة 
                <p style="color: red; display: inline">*</p></label
              >
              <input type="text " class="form-control p-2" />
            </div>

            <div class="col-lg-12 col-12">
              <label for="">
                تفاصيل العنوان
                <p style="color: red; display: inline">*</p></label
              >
              <input type="text " class="form-control p-2" />
            </div>

            <div class="col-lg-6 col-12">
              <label for=""> علامة مميزة </label>
              <input type="text " class="form-control p-2" />
            </div>

            <div class="col-lg-6 col-12">
              <label style="text-align: start" for=""> تسمية العنوان </label>
              <input type="text  " class="form-control p-2" />
              <p style="text-align: right; color: rgba(140, 136, 150, 1)">
                اطلق اسم لعنوانك مثل : عنوان العمل , عنوان المنزل ....
              </p>
            </div>

            <div class="col-lg-6 col-12">
              <label for=" ">
                الاسم كامل
                <p style="color: red; display: inline">*</p></label
              >
              <input type="text  " class="form-control p-2" />
            </div>

            <div class="col-lg-6 col-12">
              <label for=" ">
                رقم الهاتف
                <p style="color: red; display: inline">*</p></label
              >
              <input type="text  " class="form-control p-2" />
            </div>

            <div class="col-lg-12 col-12 btn">
              <button>
                <img src="../assets/placeholder 1.png" alt="" />حدد موقعك على
                الخريطة
              </button>
            </div>

            <div class="col-lg-12 col-12" style="text-align: start">
              <h2>نوع العنوان</h2>

              <button class="btn1">
                <img src="../assets/briefcase.png" alt="" />عمل
              </button>
              <button class="btn2">
                <img src="../assets/home-2.png" alt="" />منزل
              </button>

              <p style="color: rgba(140, 136, 150, 1); margin: 18px 4px">
                اجعل هذا العنوان هو العنوان الافتراضي
              </p>
              <button
                @click="visible = true"
                style="
                  background-color: rgba(164, 202, 114, 1);
                  color: white;
                  border: none;
                  border-radius: 8px;
                  padding: 14px;
                  padding-left: 80px;
                  padding-right: 80px;
                  margin-bottom: 5%;
                "
              >
                حفظ
              </button>

              <Dialog
                v-model:visible="visible"
                modal
                style="
          background-color: white;
          box-shadow: 8px 8px 8px 4px rgba(0.2, 0, 0, 0.2);
          border-radius: 15px;
          padding: 25px;
          height: 410px;
              
        "
                :style="{ width: '30rem' }"
              >
                <template #container>
                  <div class="Done">
                   
                    
                   
                     <i
    style="
      font-size: 120px;
      margin-right: 37%;
margin-top: 8%;
      color: rgba(136, 201, 65, 1);
    "
    class="fa-solid fa-circle-check "
  ></i>


  <h4 >تم اضافة العنوان بنجاح</h4>

  <div style="margin-top: 9% ; margin-right: 3%">

  <router-link to="/AddNewAddressView"> <button @click="visible = false" class="btnn1">عنوان جديد</button> </router-link>
   <router-link to="/SavedAddressView">  <button class="btnn2">العودة لعناويني</button></router-link>


  </div>
     
                  
                  </div>
                </template>
              </Dialog>
            
            
            
            
            </div>
          </div>
        </div>

        <div
          class="col-md-3 p-3 rounded"
          style="
            background-color: white;
            margin-right: 7.5%;
            height: fit-content;
          "
        >
          <h2 style="text-align: start">العناوين المحفوظة</h2>

          <div style="display: flex">
            <img
              style="margin-left: 17px"
              src="../assets/Group 48097242.png"
              alt=""
            />
            <h5>العنوان الاول</h5>
          </div>
          <p
            style="
              margin-right: 8%;
              text-align: start;
              color: rgba(140, 136, 150, 1);
            "
          >
            طريق العروبة، 8334، الرحمانية، الرياض RHOC3233، 3233 <br />
            12333، السعودية
          </p>

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
          </div>

          <hr style="width: 90%; margin: auto" />

          <div style="display: flex; margin-top: 3%">
            <img
              style="margin-left: 17px"
              src="../assets/Group 48097242.png"
              alt=""
            />
            <h5>العنوان الثاني</h5>
          </div>
          <p
            style="
              margin-right: 8%;
              text-align: start;
              color: rgba(140, 136, 150, 1);
            "
          >
            طريق العروبة، 8334، الرحمانية، الرياض RHOC3233، 3233 <br />
            12333، السعودية
          </p>

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
          </div>

          <button
            style="
              background-color: white;
              color: rgba(164, 202, 114, 1);
              margin-top: 2%;
              border: 1px solid rgba(164, 202, 114, 1);
              border-radius: 8px;
              padding: 18px;
              width: 100%;
            "
          >
            عرض كل العناوين
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Checkbox from 'primevue/checkbox';

import Dialog from "primevue/dialog";
import NavbarView from "@/components/NavbarView.vue";
import Breadcrumb from "primevue/breadcrumb";
export default {
  data() {
    return {
      visible: false,

      item: [
        { label: " الرئيسية" },
        { label: "العناوين المحفوظة " },
        { label: "اضافة عنوان جديد  " },
      ],
    };
  },
  components: {
    NavbarView,
    Breadcrumb,
    Dialog,
  },
};
</script>

<style scoped>
.btnn1{
  padding: 14px;
  padding-right: 50px;
  padding-left:50px;
  background-color: rgba(164, 202, 114, 1);
border: none;
  border-radius: 8px;
  color: white;
  margin-left: 20px;
}
.btnn2{
  padding: 14px;
  padding-right: 50px;
  padding-left: 50px;
  border: 1px solid rgba(164, 202, 114, 1);
  background-color: white;
  border-radius: 8px;
  color: rgba(164, 202, 114, 1);
  margin-left: 20px;
}

label{
  padding-top: 2%;

}
input{
  margin-top: 9px;
}


.Done h4{
  font-size: 33px;
margin-top: 13%;
margin-right: 13%;
}
dialog {
    background-color: white;
}
.btn2 img {
  margin-left: 14px;
}
.btn1 img {
  margin-left: 14px;
}
.btn2 {
  margin-top: 2%;
  color: #000;
  padding: 20px 36px;
  border: 1px solid rgba(164, 202, 114, 1);
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
}
.btn1 {
  margin-top: 2%;
  color: #000;
  padding: 20px 36px;
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: white;
  border-radius: 8px;
  margin-left: 20px;
}
label {
  text-align: start;
  width: 100%;
}
.btn button {
  width: 100%;
  background-color: white;
  border: 1px solid rgba(164, 202, 114, 1);
  padding: 15px 15px;
  border-radius: 10px;
  margin-top: 5px;
  text-align: start;
}
.btn img {
  margin-left: 25px;
}
</style>