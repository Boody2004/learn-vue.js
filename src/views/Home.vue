<template>
  <section>
    <div class="text">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ pageName }}</h1>
      <p>{{ pageDescription }}</p>
    </div>

    <div class="container">
      <Card
        cardName="Top western road trips"
        title="1,000 miles of wonder"
        button="Explore"
        p=" I'm a thing. But, like most politicians,"
      />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Global/Card.vue";
export default {
  components: { Card },
  name: "Home",
  data: function () {
    return {
      pageName: "Home",
      pageDescription: "This Is Home Us Page",
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
