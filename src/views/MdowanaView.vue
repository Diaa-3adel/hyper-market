<template>
  <navbar-view></navbar-view>

  <div class="flex justify-center">
    <Breadcrumb
      style="margin-right: 140px; border: none; padding: 10px"
      :home="home"
      :model="items"
    />
  </div>



  <div class="container"  style="margin-right: 5%; margin-top: 2%;">
    <div class="row" >
        <div class="col-md-4" style="margin-left: 19%" >
           
            <img src="../assets/sign-says-online-is-better-with-a-small-shopping-cart.jpg" alt="">
            <h3>June 28, 2018</h3>
            <h2>اعرف فائدة التسوق الالكترونى و احصل على كل <br> طلباتك بسهولة</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد <br> تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل  هذا النص أو العديد من ال</p>
             <a href="">عرض المزيد</a>

            </div>


            <div class="col-md-4">
            <img src="../assets/sign-says-online-is-better-with-a-small-shopping-cart.jpg" alt="">
            <h3>June 28, 2018</h3>
            <h2>اعرف فائدة التسوق الالكترونى و احصل على كل <br> طلباتك بسهولة</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد <br> تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل  هذا النص أو العديد من ال</p>
             <a href="">عرض المزيد</a>
        </div>

    
    
    </div>


            



     






    </div>



</template>

<script>
import Breadcrumb from "primevue/breadcrumb";

import NavbarView from "@/components/NavbarView.vue";
export default {
  data() {
    return {
      items: [{ label: " الرئيسية" }, { label: " المدونة" }],
    };
  },
  components: {
    NavbarView,
    Breadcrumb,
  },
};
</script>


<style scoped>
img{
width: 660px;
height: 506px;
border-radius: 15px;
}

</style>