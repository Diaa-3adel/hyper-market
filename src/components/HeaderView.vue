<template>


  <div class="head">
    <div class="right">
      <button @click="show = !show">  <i class="fa-solid fa-bars"></i>   الاصناف    <i class="fa-solid fa-chevron-down"></i></button> 


    </div>
    <div class="buton" v-if="show">
            <router-link to="/AllProductView" >
             المنتجات الغذائية
            </router-link>

            <router-link to="/AccSettingView">
              منتجات المنزل
            </router-link>

            <router-link to="/MyFavoriteView">
              الالكترونيات
            </router-link>

            <router-link to="/SavedAddressView">
              الاكسسوارات 
            </router-link>

            <router-link  to="">
              منتجات الجمال 
            </router-link>
            <router-link  to="">
              حقائب و أحذية 
            </router-link>
                  <router-link  to="">
                    الأزياء و الموضة  
            </router-link>
          </div>



    <div class="left">
      <router-link to="/AllProductView">المنتجات    </router-link>
      <router-link to="/OurStoriesView">قصتنا</router-link>
      <router-link to="/MdowanaView">المدونه </router-link>
      <router-link to="/ContactUsView">تواصل معنا</router-link>
    </div>
  </div>

  <div class="img">
    <img src="../assets/e72c3b2ae35f0163ee3978e926d7d322.jpg" alt="" />
  </div>


  


</template>

<script>


export default {
  data(){
    return{
      show:false,

    }
  },
  components:{}
};
</script>

<style scoped>

.head {
  margin: 2% 6.5%;
  display: flex;
  justify-content: space-between;
}
.right a {
  background-color: #a4ca72;
  color: white;
  padding: 10px 55%;
  border-radius: 10px;
}
a {
  margin: 10px;
  font-size: 22px;
  text-decoration: none;
  color: #605b6c;
}

.img img {
  width: 100%;
}
.buton {
    width: fit-content;
    position:absolute;
    top: 308px;
    right: 110px;
}


.buton a {
  display: block;
  padding: 15px 20px;
  background-color: white;
  border-radius: 10px;
  margin: 7px;
  padding-left: 150px;
  border: none;
  text-align: right;
  color: black;
 
}
.right button{
  background-color: #a4ca72;
  color: white;
  padding: 16px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 10px;
  border: none;
}
i{
  padding: 5px;
  font-size: 20px;
}
</style>