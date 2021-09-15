<template>
  <div id="app">
    <AppBar />
    <router-view />
  </div>
</template>

<script>
import AppBar from "@/components/App/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
