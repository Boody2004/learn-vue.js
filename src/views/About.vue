<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>

export default {
  name: "About",
  data: function () {
    return {
      pageName: "About us",
      pageDescription: "This Is About Us Page"
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
  font-weight: bold;
  color: orange;
}
</style>

