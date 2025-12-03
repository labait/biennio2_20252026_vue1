<script setup>
import { onMounted, ref } from 'vue';

const citation = ref("");
onMounted( async() => {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const json = await response.json();
  console.log('Fetched joke:', json.value);
  citation.value = json.value;
})

</script>

<template>
  <h2 class="text-xl font-semibold mb-2">Random Citation</h2>
  <div v-if="citation">
    <div id="citation" class="p-4 bg-gray-100 rounded-lg mb-8">
      <p class="text-gray-700 font-mono">{{ citation }}</p>
    </div>
  </div>
  <div v-else class="mb-6">
    <p>Loading citation...</p>
  </div>
</template>