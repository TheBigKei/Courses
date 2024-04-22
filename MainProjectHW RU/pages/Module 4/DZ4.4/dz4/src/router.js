import { createRouter, createWebHistory } from 'vue-router';
import PageTwo from './components/PageTwo';

const routes = [
  {
    path: '/pagetwo',
    name: 'PageTwo',
    component: PageTwo
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;