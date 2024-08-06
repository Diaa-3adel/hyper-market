<template>

  <navbar-view></navbar-view>

  <h2 >هل تواجهك أحد المشاكل او لديك بعض المقترحات <br> تواصل معنا الأن</h2>
<div class="form">

  <div class="container">
    <div class="row">
        <div class="col-md-6 " >
            <img width="100% " style="margin-top: 10%; " src="../assets/guy-working-at-computer-vector-18227823.jpg" alt="">
        </div>


        <div class="col-md-6 " >
           <form action="">

            <input  type="text " placeholder="الاسم كــاملا">
            <input type="text " placeholder="البريد الالكترونى ">
            <input type="text " placeholder="رقم الجوال ">
            <input type="text " placeholder="موضوع الرسالة ">
            <input style="padding-bottom: 30%" type="text-area " placeholder="نص الراسالة">
            <button @click="showAlert()">ارسال</button>





           </form>
        </div>

    </div>
  </div>


</div>
<footer-view></footer-view>
</template>

<script>
import Swal from "sweetalert2";

import NavbarView from "@/components/NavbarView.vue";
import FooterView from '@/components/FooterView.vue';
export default {
    components : {NavbarView , FooterView},

    methods : {
        showAlert(){
      Swal.fire({
  position: "top-center",
  icon: "success",
  title: "تم إرسال رسالتك بنجاح",
  showConfirmButton: false,
  timer: 1500,
  width: 600,
});
    },
    }
}
</script>

<style scoped>
h2{
    text-align: right;
    margin-right: 7%;
    margin-top: 15px;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;

}

button{
    width: 124%;
    margin-right: 90px;
    padding:25px;
    border: none;
    border: 1px solid;
    background-color:   rgba(164, 202, 114, 1);

    color: white;
    border-radius: 17px;
    margin-top: 25px;
    
}
input{
    display: block;
    padding: 24px;
padding-left: 85%;
margin-right: 90px;
margin-top: 10px;
border-radius:15px ;
border: none;
border: 1px solid;
border-color: rgba(225, 223, 228, 1);



}
form{
    margin-left: 10%;
}
</style>