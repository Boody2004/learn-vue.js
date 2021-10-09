<template>
  <section>
    <div class="text">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDescription }}</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/leon-template-HTM-CSS-responsive/master/img/leon-template.png"
            cardName="leon-template-HTM-CSS-responsive"
            title="HTM AND CSS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/leon-template-one-responsive"
            p=" A simple form of HTML and CSS but Responsive and based on a grid"
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/cards-grid/master/images/image-web.jpg"
            cardName="cards-grid"
            title="HTM AND CSS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/cards-grid"
            p=" Grid with css "
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/first-project-bootstrap5/master/all-website.jpg"
            cardName="first-project-bootstrap5"
            title="Tools: bootstrap5 and jquery"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/first-project-bootstrap5"
            p=" A simple form of HTML, CSS and but bootstrap5 "
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://lh3.googleusercontent.com/Xqtg-KaxQ7I-Jhoc9U5GCDRtuYKikjUjQv8TuNdd32wf1mAe5w-_sH16-pfu3eo-ylW4FA=s85"
            cardName="kasper-template-HTM-CSS-responsive"
            title="HTM AND CSS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/kasper-template-two-responsive"
            p="kasper-template-two-responsiv"
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
