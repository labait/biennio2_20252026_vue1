<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String
});
</script>

<template>
  <div class="work">
    <h2>{{ title }}</h2>
    <p>{{ description}}.</p>
  </div>
</template>