<template>
  <section>
    <div class="text">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDescription }}</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <Card
            imageLinke="https://www.siberdefter.com/wp-content/uploads/2020/04/javascript-egitimi.png"
            cardName="Learn JS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/learn-js"
            p=" 
          I learned in
          -style for h1 in main    
          -Output To Screen 
          -Console Methods
          -Data Types Intro
          -Variables Intro 
          -Identifiers
          -Var, Let and Const
          -String Syntex + Chaacter Escape Squences
          -Concatenation
          -Template Literals (Template String)
          -Arithmetic Operators
          -Unary Plus [Return Number If Its Not Number] and Unary Negation [Return Number If Its Not Number + Negates it]
          -Type Coerction (Tyep Casting)
          -Assignment Operators
          -Number
          -Number Methods 
          -Number Object 
          -String Methods
          -Comparison Operators
          -Logical Operators
          -Control Flow
          -Nested If
          -Condition (Ternary) Operator
          -Switch Statement
          -Switch Challenge And If Condition Challenge
          -Arrays
          -Arrays Methods
          -Arrays Methods [Adding And Removing]
          -Arrays Methods [Search]
          -Arrays Methods [Sport]
          -Arrays Methods [Silcing]
          -Arrays Methods [Joining]
          -Loop
          -Loop Control"
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/scroll-to-top-js/master/image.jpg"
            cardName="Scroll To Top JS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/scroll-to-top-js"
            p="Scroll To Top With Buttom"
          />
        </div>
        <div class="col-lg-4">
          <Card
            imageLinke="https://raw.githubusercontent.com/Boody2004/random-background-color-js/master/image.jpg"
            cardName="Random Background Color JS"
            button="Explore"
            buttonLinke="https://github.com/Boody2004/random-background-color-js"
            p="Random Background Color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Global/Card.vue";
export default {
  name: "Js",
  components: { Card },
  data: function () {
    return {
      pageName: "Js",
      pageDescription: "This Is Js Us Page",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 30px;
  font-weight: bold;
  color: var(--orange-sherbet);
}
</style>
