import Vue from 'vue';
import 'sanitize.css';

import MuseUI from 'muse-ui';
import Scrollspy from 'vue2-scrollspy';
import 'muse-ui/dist/muse-ui.css';
import VueAnalytics from 'vue-analytics';

import VueYouTubeEmbed from 'vue-youtube-embed';

import App from './App';
import router from './router';


Vue.use(Scrollspy);
Vue.use(VueYouTubeEmbed);
Vue.use(MuseUI);
Vue.use(VueAnalytics, {
  id: 'UA-98469833-1',
  router,
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
