<script setup>
import { onMounted } from 'vue';
import Work from './Work.vue';


onMounted(() => {
  console.log('Intro component mounted.');
});

const works = [
  { id: 1, title: 'Work 1' },
  { id: 2, title: 'Work 2' },
  { id: 3, title: 'Work 3' },
  { id: 4, title: 'Work 4' },
  { id: 5, title: 'Work 5' }


]



</script>

<template>
  <div class="title">
    <h1>Welcome to the Intro Component!</h1>
    <p>This is a simple introduction component.</p>
  </div>
  <div v-for="work in works" :key="work.id">
    <Work :title="work.title" :description="work.description" />
  </div>
</template>

<style scoped>
  .title {
    text-align: center;
    color: #333;

  }
</style>