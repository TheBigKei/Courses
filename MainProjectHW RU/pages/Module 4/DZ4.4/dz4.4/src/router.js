import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import OtherPage from './components/OtherPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/other', component: OtherPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;