import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profile/index';
import './registerServiceWorker';
import './style.scss';

Vue.config.productionTip = false;
const store2: StoreOptions<RootState> = {
  state: {
      version: '1.0.0' // a simple property
  },
  modules: {
      profile
  }
};
export default new Vuex.Store<RootState>(store2);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Vue.use(Vuex);
