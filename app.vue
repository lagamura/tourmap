<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-main>
      <v-container><NuxtPage :key="$route.fullPath"/></v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref("dark");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
