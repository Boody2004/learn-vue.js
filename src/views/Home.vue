<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      pageName: "Home",
      pageDescription: "This Is Home Us Page",
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
  font-weight: bold;
  color: orange;
}
</style>
