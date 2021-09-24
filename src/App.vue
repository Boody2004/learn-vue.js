<template>
  <section>
    <v-card id="card">
      <v-app-bar dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-btn to="/" fab class="mr-2 mt-4" color="#fff">
          <v-icon color="#ffa500" large>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>

      <router-view />
      <Footer />

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" color="#ffa500">
            <v-list-item to="/html&css">
              <v-list-item-icon>
                <v-icon> mdi-language-html5 </v-icon>
                <v-icon> mdi-language-css3 </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Hhtml And css</v-list-item-title>
            </v-list-item>

            <v-list-item to="/js">
              <v-list-item-icon>
                <v-icon> mdi-language-javascript </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Js</v-list-item-title>
            </v-list-item>

            <v-list-item to="/vue">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Vue.js</v-list-item-title>
            </v-list-item>

            <v-list-item to="/animaction&tools">
              <v-list-item-icon>
                <v-icon> mdi-walk </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Animaction And Tools</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon> mdi-account </v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </section>
</template>

<script>
import Footer from "@/components/App/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
.text {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#card {
  background-color: #eee;
}
</style>
