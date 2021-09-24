<template>
  <section>
    <a href="/" class="logo"> <i class="far fa-question-circle"></i> Logo </a>
    <nav class="navbar">
      <a href="/html&css">html&css</a>
      <a href="/js">Js</a>
      <a href="/vue">Vue.js</a>
      <a href="/animaction&tools">animaction And Tools</a>
      <a href="/about">About</a>
    </nav>
  </section>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
@import "../../style/shared-style/shared-style.css";
* {
  text-decoration: none;
}
section {
  background-color: var(--dark);
  padding: 20px 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: var(--light);
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
}
nav a:hover {
  transition: var(--transition);
  color: var(--orange-sherbet);
}
a {
  color: var(--light);
  font-size: 1.7rem;
  margin-left: 2rem;
}
</style>
