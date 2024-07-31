<template>
  <div class="footer">
    <div class="info">
      <div>
        <h2>سرعه التوصيل</h2>

        <P>لجميع الطلبات التي تزيد عن <br />150 SAR</P>
      </div>
      <div>
        <h2>التوصيـل المجاني</h2>
        <P>لجميع الطلبات التي تزيد عن <br />150 SAR</P>
      </div>
      <div>
        <h2>مدفوعات آمنة</h2>
        <P>لجميع الطلبات التي تزيد عن <br />150 SAR</P>
      </div>
      <div>
        <h2>خدمات الدعم</h2>
        <P>لجميع الطلبات التي تزيد عن <br />150 SAR</P>
      </div>
    </div>
    <hr />

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img
            style="margin-left: 40%"
            width="28%"
            src="../assets/logo.png"
            alt=""
          />
          <h3
            style="
              font-size: 17px;
              line-height: 29px;
              text-align: right;
              margin-right: 15%;
              margin-top: 4%;
            "
          >
            موقع متخصص لبيع جميع المنتجات , منصة لبيع <br />
            وشراء السلع سواء كانت منتجات أو خدمات أو <br />
            معلومات عبر شبكة الإنترنت.
          </h3>
          <div class="ii">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div class="col-md-3">
          <h3 style="font-weight: bold;">روابط سريعه</h3>
          <div style="text-align: right; margin-right: 33%">
            <router-link to="/OurPrivacyView"
              >سياسة الخصوصية والاستخدام</router-link
            >
            <router-link to="/OurRolesView">سياسة الاسترجاع</router-link>
            <router-link to="/OurStoriesView">قصتنا</router-link>
            <router-link to="/MdowanaView">المدونة</router-link>
            <router-link to="/ContactUsView">تواصل معنا</router-link>
            <router-link to="/QuestionView">الأسألة الشائعة</router-link>
          </div>
        </div>

        <div class="col-md-3 icon" style="margin-top: 7px">
          <h3 style="font-weight: bold;">تواصل معنا</h3>
          <p><i class="fa-solid fa-phone"></i>547-526-8071</p>
          <p><i class="fa-regular fa-envelope"></i>Example@gmail.com</p>
          <p><i class="fa-brands fa-whatsapp"></i>825-571-0899</p>
        </div>

        <div class="col-md-3 ">
          <h3 style="font-weight: bold;">فحص QR Code</h3>
          <img
          
            width="50%"
            style="margin-top: 13px;"
            src="../assets/722b9228b78248240cf5cff26760b85d.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr />

    <div class="end">
      <div style="margin-left: 26%">
        <h2 style="font-size: 20px; margin-top: 25px">
          كل الحقوق محفوظة @ المتجر2023
        </h2>
      </div>

      <div class="image">
        <img src="../assets/e138796e0c4ff055d377e8275416627f.png" alt="" />
        <img src="../assets/abbbf6a24f4525df44a9a423329b76ab.png" alt="" />
        <img src="../assets/dbeea2684c3bc207a4bc7f251c04a576.png" alt="" />
        <img src="../assets/76614e449e349c8b40abf9c81459cfe4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon i {
  margin: 14px;
}
.icon p {
  text-align: right;
  margin-right: 36%;
  margin-top: 2%;
}
.ii i {
  margin: 8px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  margin-top: 16%;
}
.ii {
  margin-left: 130px;
}
.end {
  display: flex;
  justify-content: space-around;
  /* padding: 10px; */
}

.image img {
  width: 9%;
  margin: 5px;
  padding: 10px;

}
.footer {
  margin-top: 6%;
  background-color: #d9d9d96c;
}
.info {
  padding: 50px;
  display: flex;
  justify-content: space-around;
}
a {
  display: block;
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin: 20px 0;
  /* text-align: right; */
}
.image {
  width: 50%;
  text-align: left;
}
</style>