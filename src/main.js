// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './vuex/store';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
