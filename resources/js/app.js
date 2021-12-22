require('./bootstrap');

import Vue from 'vue';
import store from './vue/store'
import App from './vue/App';

const app = new Vue({
  el: '#app',
  store,
  components: { App }
});