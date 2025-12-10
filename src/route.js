import { createRouter, createWebHistory } from 'vue-router';

import HomepageView from './views/HomepageView.vue';
import WorkView from './views/WorkView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomepageView,
  },
  {
    path: '/work/:id',
    name: 'WorkView',
    component: WorkView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
