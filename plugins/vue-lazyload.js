import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  error: '/images/img-load-failed.png',
  loading: '/images/img-loading.gif',
  attempt: 1,
  lazyComponent: false,
});