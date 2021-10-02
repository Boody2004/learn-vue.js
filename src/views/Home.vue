<template>
  <section>
    <div class="container">
      <div class="text">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      pageName: "Home",
      pageDescription: "This Is Home Page",
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
