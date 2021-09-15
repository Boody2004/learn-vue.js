<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "Help",
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This Is Help Us Page",
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
