<template>
 <div class="head">
    <div class="right">
        <a href="">الاصناف</a>
    </div>

    <div class="left">
        <a href="">المنتجات</a>
        <a href="">قصتنا</a>
        <a href="">المدونه</a>
        <a href="">تواصل معنا</a>

    </div>
 </div>


 <div class="img">
  <img src="../assets/e72c3b2ae35f0163ee3978e926d7d322.jpg" alt="">
 </div>
</template>

<script>

export default {
  

}
</script>

<style scoped>
.head{
     margin: 2% 6%;
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
color: #605B6C;
}

.img img{
        width: 100%;
}
</style>