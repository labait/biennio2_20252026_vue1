<script setup>
import { ref, onMounted, provide } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';

const global = ref({
  works: null,
  isLoading: true
})


onMounted(async () => {
  const sheet_id = "1dLLOAmepnXzuEYwiHXzsj2vZj4L5aWnWF4k6C0WU9qw" // spreadsheet id
  const range = "data!a1:e100" // ie: Sheet1!A1:c100
  const api_key = "API_KEY" // insert your api key
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/${range}?key=${api_key}`
  const response = await fetch(url);
  //console.log(response);
  const json = await response.json()
  //console.log(json);
  const values = json.values;
  const keys = values.shift();
  global.value.works = values.map(value => Object.fromEntries(keys.map((k, i) => [k,value[i]])))
  console.log(global.value.works);
  global.value.isLoading = false;
});

provide('global', global);

</script>

<template>
  <Loading v-if="global.isLoading"></Loading>
  <main class="w-full max-w-4xl mx-auto mt-8 px-6">
    <Header/>
    <div class="mb-4">
      <router-view />
    </div>
    <Footer />
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
