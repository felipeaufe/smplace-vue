import { createApp } from 'vue';
import { store } from './store';
import { router } from './router';
import { i18n } from './assets/i18n';
import { isMobile } from './assets/plugins/mobile-detect';
import Notifications from '@kyvg/vue3-notification';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(isMobile);
app.use(Notifications);

app.mount('#app');
