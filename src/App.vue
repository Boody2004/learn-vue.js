<template>
  <div id="app">
    <AppBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import AppBar from "@/components/App/AppBar.vue";
import Footer from "@/components/App/Footer.vue";
export default {
  name: "App",
  components: {
    AppBar,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  background-color: #eee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
