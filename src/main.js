import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import Api from './common/api';
import jsonValidator from './common/jsonValidator';
import Formatter from './common/formatter';


import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);
Vue.prototype.$_API = Api;
Vue.prototype.$_jsonValidator = jsonValidator;
Vue.prototype.$_Formatter = Formatter;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
