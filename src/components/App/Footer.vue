<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Page's</h4>
          <ul>
            <li><a href="/html&css">Html And Css</a></li>
            <li><a href="/js">Js</a></li>
            <li><a href="/vue">Vue.js</a></li>
            <li><a href="/animaction&tools">Animaction And Tools</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#" target="_blank">FAQ</a></li>
            <li><a href="#" target="_blank">shipping</a></li>
            <li><a href="#" target="_blank">returns</a></li>
            <li><a href="#" target="_blank">order status</a></li>
            <li><a href="#" target="_blank">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#" target="_blank">watch</a></li>
            <li><a href="#" target="_blank">bag</a></li>
            <li><a href="#" target="_blank">shoes</a></li>
            <li><a href="#" target="_blank">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import "../../style/shared-style/shared-style.css";
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
section {
  background-color: var(--dark);
  padding: 70px 0;
  margin-top: 100vh;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
  text-align: left;
}
h4 {
  font-size: 18px;
  color: var(--light);
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: var(--light);
  font-weight: 300;
  display: block;
  transition: var(--transition);
}
.footer-col ul li a:hover {
  color: var(--orange-sherbet);
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  color: var(--light);
  transition: var(--transition);
}
.footer-col .social-links a:hover {
  color: var(--orange-sherbet);
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
</style>
