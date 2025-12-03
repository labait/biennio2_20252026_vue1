<script setup>
import { onMounted, ref, inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const global = inject('global');
</script>


<template>
  <div v-if="global.works">
    <h2 class="text-2xl font-bold mb-4">Works</h2>
    <div class="grid space-y-6 space-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <RouterLink v-for="(item, index) in global.works " :key="index" class="mb-8" :to="`/work/${item.id}`">
        <h3 class="text-xl font-semibold">{{ item.title }}</h3>
        <p class="text-gray-700">{{ item.description }}</p>
        <img :src="item.image" alt="" class="w-full grayscale hover:grayscale-0 cursor-pointer transition-all duration-300 mt-2"/>
        <!-- <a :href="item.link" class="text-blue-500 underline" target="_blank">View More</a> -->
      </RouterLink>
    </div>
  </div>
</template>