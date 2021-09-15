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
  margin-top: 8rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
