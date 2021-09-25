<template>
  <section>
    <div class="container">
      <div class="text">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      pageName: "About us",
      pageDescription: "This Is About Us Page",
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
