<script setup>
import Header from './components/Header.vue';
import Citation from './components/Citation.vue';
import Headline from './components/Headline.vue';
import Footer from './components/Footer.vue';
import Works from './components/Works.vue';

</script>

<template>
  <main class="w-full max-w-4xl mx-auto">
    <Header class="mb-8" />
    <Headline class="mb-4" />
    <Citation class="mb-4" />bbb
    <!-- <Works class="mb-4" />
    <Footer class="mt-8" /> -->
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
