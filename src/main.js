import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/routes'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
