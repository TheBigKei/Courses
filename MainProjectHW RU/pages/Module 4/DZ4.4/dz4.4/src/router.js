import { createRouter, createWebHistory } from 'vue-router';
import Page2 from './components/page2';

const routes = [
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;