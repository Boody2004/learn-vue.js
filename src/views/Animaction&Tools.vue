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
            imageLinke="https://raw.githubusercontent.com/Boody2004/svg-darck-mode/master/dark-mode.jpg"
            cardName="svg-darck-mode"
            title="Tools: Figma"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/svg-darck-mode"
            p=" Dark mode and icon make in figma"
          />
        </div>
        <div class="col">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/gsap-animation/master/gsap-animation.jpg"
            cardName="gsap-animation"
            title="Library: CDN"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/gsap-animation"
            p="..."
          />
        </div>
        <div class="col">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/fullpage-animations-with-javascript/master/image2.jpg"
            cardName="fullpage-animations-with-javascript"
            title="Library: CDN and full page"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/fullpage-animations-with-javascript"
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
