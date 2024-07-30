<template>
  <navbar-view></navbar-view>

  <i
    style="
      font-size: 120px;
margin-top: 8%;
      color: rgba(136, 201, 65, 1);
    "
    class="fa-solid fa-circle-check "
  ></i>
  <h2 class="mt-3">تمت عملية الشراء بنجاح , يمكنك عرض تفاصيل  <br>الطلب وتتبعه من خلال طلباتي</h2>
  <div class="mt-4">

      <button id="one">طلباتي</button>
    <router-link to="/"><button id="two">العودة للرئيسية</button> </router-link>
    
    </div>

</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
export default {
  components: {
    NavbarView,
  },
};
</script>

<style scoped>
#one{
    padding: 15px;
    padding-right: 35px;
    padding-left: 35px;
    margin: 10px;
    border: none;
    background-color: rgba(164, 202, 114, 1);
    color: white;
    border-radius: 5px;
}
#two{
    padding: 15px;
    padding-right: 35px;
    padding-left: 35px;
    margin: 10px;
    border: 1px solid rgba(164, 202, 114, 1);
    background-color:white; ;
    color: rgba(164, 202, 114, 1);
    border-radius: 5px;
}
</style>