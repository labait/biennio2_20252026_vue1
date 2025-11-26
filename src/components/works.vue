<script setup>
import { onMounted, ref } from 'vue';

const data = ref([]);

onMounted(async () => {
  console.log('Works component mounted');
  const sheet_id = "1dLLOAmepnXzuEYwiHXzsj2vZj4L5aWnWF4k6C0WU9qw" // spreadsheet id
  const range = "data!a1:e100" // ie: Sheet1!A1:c100
  const api_key = "API_KEY" // insert your api key
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/${range}?key=${api_key}`
  const response = await fetch(url);
  const json = await response.json();
  const values = json.values;
  const keys = values.shift();
  data.value = values.map(value => Object.fromEntries(keys.map((k, i) => [k,value[i]])))
  console.log(data)
});
</script>


<template>
  <div v-if="data">
    <h2 class="text-2xl font-bold mb-4">Works</h2>
    <ul>
      <li v-for="(item, index) in data" :key="index" class="mb-2">
        <h3 class="text-xl font-semibold">{{ item.title }}</h3>
        <p class="text-gray-700">{{ item.description }}</p>
        <img :src="item.image" alt="">
        <!-- <a :href="item.link" class="text-blue-500 underline" target="_blank">View More</a> -->
      </li>
    </ul>
  </div>
</template>