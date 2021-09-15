<template>
  <section class="app-bar">
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
* {
  text-decoration: none;
}
.app-bar {
  background-color: #333;
  padding: 20px 9%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: #fff;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
}
a {
  color: #fff;
  font-size: 1.7rem;
  margin-left: 2rem;
}
nav a:hover {
  transition: 0.7s ease;
  color: orange;
}
</style>
