import Vue from 'vue';
import VueRouter from 'vue-router';
import Einarbeitstitel from '../views/Einarbeitstitel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Einarbeitstitel,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

export default router;
