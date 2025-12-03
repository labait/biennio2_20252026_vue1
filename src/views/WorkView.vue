<script setup>
import { computed, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import WorkDetail from '../components/WorkDetail.vue';

const route = useRoute();
const global = inject('global');

const work = computed(() => {
  const id = route.params.id;
  return global.value.works ? global.value.works.find(w => w.id === id) : null;
});


</script>

<template>
  <router-link to="/" class="text-blue-600 hover:underline mb-4 inline-block">← Torna alla homepage</router-link>  
  <WorkDetail :work="work" />
</template>