<template>
  <section>
    <div class="text">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDescription }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
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
