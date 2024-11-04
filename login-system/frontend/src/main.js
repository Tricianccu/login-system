import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import router from './router';
import store from './store';

createApp(App)
  .use(Quasar)
  .use(router)
  .use(store)
  .mount('#app');
