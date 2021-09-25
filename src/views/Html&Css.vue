<template>
  <section>
    <div class="container">
      <div class="text">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
      <div class="row">
        <div class="col">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/leon-template-HTM-CSS-responsive/master/img/leon-template.png"
            cardName="leon-template-HTM-CSS-responsive"
            title="HTM AND CSS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/leon-template-HTM-CSS-responsive"
            p=" A simple form of HTML at CSS, but Responsive and based on a grid"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Global/Card.vue";
export default {
  name: "Html&Css",
  components: { Card },
  data: function () {
    return {
      pageName: "Html And Css",
      pageDescription: "This Is Html And Css Us Page",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 30px;
  font-weight: bold;
  color: var(--orange-sherbet);
}
</style>
