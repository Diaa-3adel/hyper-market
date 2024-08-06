<template>
  <navbar-view></navbar-view>

  <div class="flex justify-center">
    <Breadcrumb
      style="margin-right: 140px; border: none; padding: 10px"
      :home="home"
      :model="items"
    />
  </div>

  <div
    style="
      background-color: rgba(164, 202, 114, 1);
      padding: 80px;
      margin-top: 2%;
    "
  >
    <h2 style="color: white; font-size: 50px">الأســألة الشائعــة</h2>
    <input type="text" placeholder="ابحث هنــا ..." />
  </div>

  <div class="card" style="width: 80%;  margin: auto; margin-top: 2%">
    <Accordion :value="['1']" multiple>
      <AccordionPanel value="0">
        <AccordionHeader >كيف يمكنني عمل طلب شحنه جديد ؟</AccordionHeader>
        <AccordionContent >
            <p class="m-0" >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة ...هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
            تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة ...هذا النص هو
            مثال لنص يمكن أن
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel  value="1">
        <AccordionHeader >كيف يمكنني عمل طلب شحنه جديد ؟</AccordionHeader>
        <AccordionContent >
          <p class="m-0" >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة ...هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
            تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة ...هذا النص   المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أهو
            مثال لنص يمكن أن
          </p>
        </AccordionContent>
      </AccordionPanel>


      <AccordionPanel  value="2">
        <AccordionHeader>كيف يمكنني عمل طلب شحنه جديد ؟</AccordionHeader>
        <AccordionContent>
            <p class="m-0" >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة ...هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
            تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة ...هذا النص هو
            مثال لنص يمكن أن
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel  value="3">
        <AccordionHeader>كيف يمكنني عمل طلب شحنه جديد ؟</AccordionHeader>
        <AccordionContent>
            <p class="m-0" >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة ...هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
            تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة ...هذا النص هو
            مثال لنص يمكن أن
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel  value="4">
        <AccordionHeader>كيف يمكنني عمل طلب شحنه جديد ؟ </AccordionHeader>
        <AccordionContent>
            <p class="m-0" >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة ...هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
            تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة ...هذا النص هو
            مثال لنص يمكن أن
          </p>
        </AccordionContent>
      </AccordionPanel>

      

    </Accordion>
  </div>



<div  class="any">
<div class="right">
    <h2 style="margin-top: 9%">هل ما زال لديك بعض الاسالة التى لم تجد اجابتها ؟</h2>
    <p style="text-align: right; font-size: 18px; margin-top:3%">فى حال لم تجد بعض الاسالة التى لم تجد اجابتها يمكنك التواصل معنا <br> وسنقوم بمساعدتك فى اقرب وقت ممكن</p>

    <router-link to="/ContactUsView"> <button >تواصل معنا </button></router-link> 
</div>

<div>
    <img  src="../assets/thinking-person-8-illustration-1579x2048-gawwrgvq.png" alt="">
</div>


</div>


<footer-view></footer-view>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Breadcrumb from "primevue/breadcrumb";
import NavbarView from "@/components/NavbarView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  data() {
    return {
      items: [{ label: " الرئيسية" }, { label: "الأسألة الشــائعة" }],
    };
  },
  components: {
    NavbarView,
    Breadcrumb,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    FooterView
  },
};
</script>

<style scoped>
input {
  width: 80%;
  margin-top: 2%;
  padding: 25px;
  border-radius: 15px;
  border: none;
}


.any{
background-color: rgb(156 188 114 / 38%);
 display: flex;
  justify-content: space-around; 
  padding: 30px; 
  margin-top: 6%;
}

.right button{
    width: 34%;
    padding: 25px;
    border: none;
    color:white;
    font-size: 19px;
  border-radius: 15px;
    background-color:   rgba(164, 202, 114, 1); 
   margin-left: 70%;
   margin-top: 4%;
}
img{
    width: 250px;
    padding: 13px;
}
.footer{
    margin-top: 0%;
}
.p-accordionheader{
    border-style: none;
    padding: 30px;
    font-size: 20px;
    font-weight: bold;
}
.p-accordionpanel{
    border: 0.5px solid rgba(217, 217, 217, 1);
}
.p-accordioncontent-content{
    padding: 45px;
    border-style: none;

}
.p-accordioncontent-content p{
    font-size: 21px;
    text-align: right;
    padding: 13px;
}   


</style>