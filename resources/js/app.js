import Vue from 'vue';
import store from './vue/store';
import axios from 'axios';
import App from './vue/App';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
  el: '#app',
  store,
  components: { App }
});