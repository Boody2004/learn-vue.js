<template>
  <section>
    <div class="container">
      <div class="text">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </div>
    <div class="ten">
      <a href="https://github.com/Boody2004/10-10" target="_blank">10-10</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      pageName: "Home",
      pageDescription: "This Is Home Page",
    };
  },
};
</script>

<style scoped>
.ten {
  margin-top: 15%;
  text-align: center;
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #be1ed3
  );
  background-size: 300% 300%;
  position: relative;
  animation: change 9s ease infinite;
}
@keyframes change {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
a {
  color: black;
  font-size: 100px;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  color: black;
}
p {
  font-size: 30px;
  font-weight: bold;
  color: var(--orange-sherbet);
}
</style>
