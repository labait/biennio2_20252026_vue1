<script setup> 
import Work from './work.vue';



const works = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    image: 'https://picsum.photos/200/300',
    link: 'https://example.com/project-one',
    highlight: true
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    image: 'https://picsum.photos/200/300',
    link: 'https://example.com/project-two'
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    image: 'https://picsum.photos/200/300',
    link: 'https://example.com/project-three'
  }
];
</script>

<template>
  <section id="works-recent" class="px-4 py-8 ">
    <h2 class="text-2xl font-bold mb-4">Recent Works</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="work in works.filter(w => w.highlight)" :key="work.title" class="mb-4">
        <Work :work="work" />
      </div>
    </div>
  </section>

  <section id="works-recent" class="px-4 py-8 ">
    <h2 class="text-2xl font-bold mb-4">My portfolio</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="work in works.filter(w => !w.highlight)" :key="work.title" class="mb-4">
        <Work :work="work" />
      </div>
    </div>
  </section>
</template>