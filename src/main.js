import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Mock from './mock';



import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


Vue.config.productionTip=false
Vue.use(ElementUI);

import router from './routes'
import config from './config'
Vue.prototype.$cfg=config

import store from './store'


import mixin from './mixin';


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});