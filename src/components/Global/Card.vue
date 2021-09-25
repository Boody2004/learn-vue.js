<template>
  <v-card class="mx-auto" max-width="400">
    <v-img :src="imageLinke" height="200px"></v-img>

    <v-card-title> {{ cardName }} </v-card-title>

    <v-card-subtitle> {{ title }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="#ffa500" text :href="buttonLinke" target="_blank">
        {{ button }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ p }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["imageLinke", "cardName", "title", "button", "p", "buttonLinke"],
  data: () => ({
    show: false,
  }),
};
</script>
