

<script setup>
defineProps({
  work: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <img :src="`${work.image}`" :alt="work.title" class="mb-2 w-32 w-full object-cover" />
  <h3 class="text-xl font-semibold">
    <a :href="work.link" target="_blank" class="text-blue-600 hover:underline">
      {{ work.title }}
    </a>
  </h3>
  <p>{{ work.description }}</p>
</template>