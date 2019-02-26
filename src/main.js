// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import './assets/css/app.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SimpleLineIcons from 'vue-simple-line'
import moment from 'vue-moment-jalaali'

Vue.use(BootstrapVue);
Vue.use(moment);
Vue.config.productionTip = false;

Vue.component('line-icon', SimpleLineIcons);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
});
