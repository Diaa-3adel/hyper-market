<template>
    <h1 style="text-align: right; margin-right: 45px; margin-top: 2%;">تســــــوق الاقسام </h1>
  <div class=" shop">


        <div class="item">
      <img src="../assets/1ac07425cb11d3e6b9f9a2e226afcc9e.png" alt="" />
      <a href="">المنتجات الغذائية </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/09b475f4393a1b151ded602c8e5e901c.png" alt="" />
      <a href="">منتجات المنزل </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/60f98c56ea89e40179c312fd908ebaa5.png" alt="" />
      <a href="">الالكترونيات </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/398b0226239c69b5eed86532fd9c2d08.png" alt="" />
      <a href="">الاكسسورارت </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/481b727da1fbae0741295ee92bdc9aec.png" alt="" />
      <a href="">منتجات الجمال </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/a88e5cfbf9c34cffb50ed68e1d089299.png" alt="" />
      <a href="">حقائب و أحذية </a>
      <p>250 منتج</p>
    </div>
    <div class="item">
      <img src="../assets/dd9938bbce338b2189c2060bf231fb30.png" alt="" />
      <a href="">الأزياء و الموضة </a>
      <p>250 منتج</p>
    </div>
   

   
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  display: block;
  text-decoration: none;
  color: black;
  font-size: 1.9rem;
  font-weight: bold;
}
.shop {
  display: flex;
    gap: 22px;
    margin: auto;
    margin-right: 34px;
    margin-bottom: 25px;
    margin-top: 27px;
}

.shop .item {
  background-color: rgba(140, 136, 150, 0.1);
  border: 1px solid white;
  border-radius: 25px;
  width: 12%;
  margin: 2px 8px;
  padding-right: 3px;
}

img {
  width: 130px;
  height: 108px;
  object-fit: scale-down;
}
</style>