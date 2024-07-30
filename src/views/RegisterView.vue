<template>
  <div
    class="register"
    style="
      width: 48%;
      border: 1px solid rgba(217, 217, 217, 1);
      margin: auto;
      padding: 20px;
      margin-top: 3%;
margin-bottom: 3%;
      border-radius: 15px;
    "
  >
    <form action="">
      <div style="display: flex; justify-content: space-between">
        <div>
          <h2>حساب جديد</h2>
          <p>من فضلك ادخل البيانات التالية للاستمرار</p>
        </div>
        <img width="150px" src="../assets/logo.png" alt="" />
      </div>

      <label for=""> اسم المستخدم   <p style="color: red; display: inline;">*</p></label>
      <input type="text" placeholder="الاسم كاملا" />

      <label for=""> رقم الهاتف <p style="color: red; display: inline;">*</p></label>
      <input type="text" placeholder=" ادخل رقم الهاتف" />

      <label for="">  البريد الالكترونى</label>
      <input type="text" placeholder=" example@gmail.com " />

      <label for=""> كلمة المرور   <p style="color: red; display: inline;">*</p></label>
      <input type="text" placeholder="كلمة المرور * " />

      <p>
        <i
          style="margin: 1%; color: rgba(164, 202, 114, 1)"
          class="fa-solid fa-info"
        ></i
        >كلمة المرور يجب ان تحتوي على الاقل على 8 رموز مكونة من حروف وارقام
      </p>
      <div class="bttn">
       <router-link to="/ConfirmView"> <button>انضم الآن</button></router-link>
      </div>

      <div class="sign" style="display: flex; justify-content: space-between">
        <button>
          <i
            style="margin: 0 16px; font-size: 35px; color: black"
            class="fa-brands fa-apple"
          ></i>
          Sign in Apple
        </button>



        <button class="google" @click="visible=true">
          <i
            style="margin: 0 16px; font-size: 30px; color: black"
            class="fa-brands fa-google"
          ></i>
          Sign in with
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
              <h2 style="font-size: 20px; font-weight: bold;" >تأكيد التسجيل بواسطة جوجل     </h2>
              <p style="font-size: 17px;"> ادخل رقم الهاتف لتأكيد تسجيل الدخول بواسطة someone@gmail.com </p>
           
              <h2 style="margin: 3% 0; font-weight: bold; font-size: 1.1rem;"> رقم الهاتف </h2>
              <input style="padding: 11px; width: 100%" type="text" />
              
              
              
       
              <button  class="btn2" 
               style="width: 100%; margin-top: 20px">
                ارسال الكود
              </button>
          
         
            </Dialog>

      </div>

      <div>
        <h5 style="font-size: 26px; margin-top: 3.5%">
          لديك حساب من قبل ؟
          <p
            style="
              display: inline;
              font-size: 26px;
              color: rgba(164, 202, 114, 1);
            "
          >
            تسجيل الدخول
          </p>
        </h5>
      </div>
    </form>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
    data(){
        return{
            visible:false,
        }
    },
    components: {
        Dialog
    }
};
</script>

<style scoped>

.btn2{
  background-color: rgba(164, 202, 114, 1);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 17px;
  padding-left: 90px;
  padding-right: 90px;
}

label {
  display: block;
  text-align: right;
  margin-top: 9px;
}
input {
  display: block;
  width: 100%;
  padding: 13px;
  margin-top: 2%;
  border-radius: 10px;
  border: 1px solid rgba(217, 217, 217, 1);
}
.bttn button {
  width: 100%;
  padding: 17px;
  background-color: rgba(164, 202, 114, 1);
  color: white;
  border: none;
  border-radius: 11px;
  font-size: 23px;
  margin-top: 2%;
}
p {
  text-align: right;
  margin-top: 2%;
  font-size: 18px;
}
.sign button {
  background-color: white;
  color: rgba(96, 91, 108, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 10px;
  padding: 17px;
  padding-left: 90px;
  padding-right: 90px;
  font-size: 23px;
  margin-top: 5%;
  /* font-size: 27px; */
  font-weight: bold;
}
</style>