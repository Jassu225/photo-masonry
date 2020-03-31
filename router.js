import Vue from 'vue';
import Router from 'vue-router';

import Login from '~/pages/Login.vue';
import Home from '~/pages/Home.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/',
        name: 'Home',
        component: Home,
      }
    ],
  });
}
