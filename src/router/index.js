import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/html&css",
    name: "Html&Css",
    component: () => import("@/views/Html&Css.vue"),
  },
  {
    path: "/js",
    name: "Js",
    component: () => import("@/views/Js.vue"),
  },
  {
    path: "/vue",
    name: "Vue",
    component: () => import("@/views/Vue.vue"),
  },
  {
    path: "/animaction&tools",
    name: "Animaction&Tools",
    component: () => import("@/views/Animaction&Tools.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
