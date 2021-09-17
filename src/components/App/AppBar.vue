<template>
  <section>
    <a href="/" class="logo"> <i class="far fa-question-circle"></i> Logo </a>
    <nav class="navbar">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/help">Help</a>
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
