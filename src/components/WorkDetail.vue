<script setup>
import { ref, onMounted } from 'vue';
defineProps({
  work: {
    type: Object,
    required: true
  }
});
</script>


<template>
  <div v-if="work" class="work-detail">
    <div class="text-xl font-bold mb-4">{{ work.title }}</div>
    <p class="mb-2">{{ work.description }}</p>
    <img :src="`${work.image}?grayscale&title=${work.title}`" :alt="work.title" class="mb-2 w-32 w-full object-cover" />
  </div>
  <div v-else>
    <p>Progetto non trovato.</p>
  </div>
</template>


<style scoped>
</style>
