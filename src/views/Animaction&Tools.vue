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
            imageLinke="https://raw.githubusercontent.com/Boody2004/svg-darck-mode/master/dark-mode.jpg"
            cardName="svg-darck-mode"
            title="Tools: Figma"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/svg-darck-mode"
            p=" Dark mode and icon make in figma"
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/gsap-animation/master/gsap-animation.jpg"
            cardName="gsap-animation"
            title="Library: CDN"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/gsap-animation"
            p="..."
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/fullpage-animations-with-javascript/master/image2.jpg"
            cardName="fullpage-animations-with-javascript"
            title="Library: CDN and full page"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/fullpage-animations-with-javascript"
            p="..."
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://res.cloudinary.com/dirbnpgsp/image/upload/v1633353444/figma-button_clsgul.png"
            cardName="Fugma butoon animaction"
            title="Tools: Figma"
            button="Figma web"
            buttonLinke="https://www.figma.com/proto/8OKb5s3FNirkMHyG6SrcJT/Untitled?node-id=2%3A30&starting-point-node-id=2%3A2"
            p="..."
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://res.cloudinary.com/dirbnpgsp/image/upload/v1633353444/figma-minyou_srftob.png"
            cardName="Figma minyou button animaction"
            title="Tools: Figma"
            button="Figma web"
            buttonLinke="https://www.figma.com/proto/svGxoKBawop4YyzUNvaNjV/Untitled?node-id=1%3A4&starting-point-node-id=1%3A4"
            p="..."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Global/Card.vue";
export default {
  name: "Animaction&Tools",
  components: { Card },
  data: function () {
    return {
      pageName: "Animaction Tools",
      pageDescription: "This Is Animaction Tools Us Page",
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
