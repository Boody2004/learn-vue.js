import Vue from "vue";

// Make UpperCase
Vue.filter("uppercase", function (v) {
  return v.toUpperCase();
});
