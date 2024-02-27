import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import jQuery from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";

window.$ = window.jQuery = jQuery;

createApp(App).use(router).use(store).mount('#app');

import "bootstrap/dist/js/bootstrap.js";
