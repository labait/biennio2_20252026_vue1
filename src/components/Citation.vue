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
  <div>{{ citation }}</div>
</template>