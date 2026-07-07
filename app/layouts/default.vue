<script lang="ts">
import Header from "@/components/pages/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <Header />
  </header>
  <body>
    <NuxtPage />
  </body>
  <footer></footer>
</template>
